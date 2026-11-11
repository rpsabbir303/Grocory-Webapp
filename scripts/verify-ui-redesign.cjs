/* Optional verification harness. Uses an existing Playwright installation; adds no app dependencies.
 * Run with PLAYWRIGHT_MODULE pointing to an installed playwright module when it isn't resolvable.
 * All mutations occur in disposable browser contexts against localhost mock services only.
 */
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const ts = require('typescript');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const base = process.env.MAIN_URL || 'http://localhost:3000';
const admin = process.env.ADMIN_URL || 'http://localhost:3001';
if (![base, admin].every(url => ['localhost', '127.0.0.1'].includes(new URL(url).hostname))) throw new Error('Use local mock servers only');
const output = process.env.UI_ARTIFACT_DIR || path.join(require('node:os').tmpdir(), 'localmarket-ui-verification');
fs.mkdirSync(output, { recursive: true });
const data = { exports: {} };
vm.runInNewContext(ts.transpileModule(fs.readFileSync('packages/api-client/src/index.ts', 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText, data);
const { mockProducts, mockStores } = data.exports;
const slug = name => name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
const results = { routes: [], layouts: [], interactions: [], pageErrors: [], imageFailures: [] };
const collectRoutes = dir => fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
  const file = path.join(dir, entry.name);
  if (entry.isDirectory()) return collectRoutes(file);
  if (entry.name !== 'page.tsx') return [];
  let route = path.relative('apps/main-web/app', path.dirname(file)).replaceAll('\\', '/').replace(/\([^/]+\)\/?/g, '');
  route = '/' + route;
  if (route === '/store/[slug]') route = '/store/' + slug(mockStores[0].name);
  if (route === '/product/[slug]') route = '/product/' + slug(mockProducts[0].name);
  route = route.replace('/stores/[id]', '/stores/store-1').replace('/merchant/products/[id]/edit', '/merchant/products/product-1/edit').replace('/merchant/[section]', '/merchant/planned-section').replace('[id]', 'UI-ORDER-1');
  return [route];
});
const order = { id: 'UI-ORDER-1', customerId: 'customer-1', storeId: 'store-1', items: [{ productId: 'product-1', quantity: 2, unitPrice: 86 }], total: 172, status: 'pending', createdAt: new Date().toISOString(), paymentMethod: 'cod', customerName: 'Alex Morgan', mobile: '01712345678', deliveryAddress: 'Mock address', area: 'Dhanmondi' };
async function main() {
  const browser = await chromium.launch({ channel: process.env.BROWSER_CHANNEL || 'chrome', headless: true });
  try {
    const context = await browser.newContext();
    await context.addInitScript(({ products, order }) => {
      if (!localStorage.getItem('ui-test-seeded')) {
        localStorage.setItem('ui-test-seeded', 'true');
        localStorage.setItem('localmarket-auth', 'customer');
        localStorage.setItem('localmarket-merchant-application', JSON.stringify({ id: 'UI-APP', applicantId: 'customer-1', businessName: 'Shobuj Bazar', merchantName: 'Alex Morgan', status: 'approved', mobile: '01712345678', category: 'Grocery', address: 'Mock address', area: 'Dhanmondi' }));
        localStorage.setItem('localmarket-cart', JSON.stringify({ storeId: 'store-1', lines: [{ product: products[0], quantity: 2 }] }));
        localStorage.setItem('localmarket-orders', JSON.stringify([order]));
        localStorage.setItem('localmarket-wishlist', JSON.stringify(['product-1', 'product-3']));
      }
    }, { products: mockProducts, order });
    const page = await context.newPage();
    page.setDefaultTimeout(8000);
    page.on('pageerror', error => results.pageErrors.push({ url: page.url(), message: error.message }));
    page.on('requestfailed', req => { if (req.resourceType() === 'image') results.imageFailures.push({ url: req.url(), error: req.failure()?.errorText }); });
    const routes = collectRoutes('apps/main-web/app');
    const auditRoutes = process.env.UI_INTERACTIONS_ONLY ? [] : routes;
    for (const route of auditRoutes) {
      const response = await context.request.get(base + route);
      results.routes.push({ route, status: response.status() });
      assert.equal(response.status(), 200, route);
    }
    results.routes.push({ route: 'admin /', status: (await context.request.get(admin)).status() });
    for (const route of ['/unknown-ui-route', '/categories/grocery']) results.routes.push({ route, status: (await context.request.get(base + route)).status(), expectedExisting404: true });
    console.log('HTTP route audit complete:', results.routes.length);
    const screenshots = new Set(['/', '/stores', '/store/shobuj-bazar', '/product/miniket-rice', '/cart', '/checkout', '/account/profile', '/merchant/dashboard', '/merchant/settings', '/merchant/reports', '/become-merchant/application']);
    for (const width of auditRoutes.length ? [360, 768, 1440] : []) {
      await page.setViewportSize({ width, height: 960 });
      for (const route of routes) {
        await page.goto(base + (route === '/order-success' ? route + '?orderId=UI-ORDER-1' : route), { waitUntil: 'networkidle' });
        const overflow = await page.evaluate(() => ({ width: innerWidth, scroll: document.documentElement.scrollWidth, offenders: [...document.querySelectorAll('main *, header *')].filter(el => { const r = el.getBoundingClientRect(); return r.width && (r.right > innerWidth + 1 || r.left < -1) && !el.closest('.overflow-x-auto, aside, [hidden]'); }).slice(0, 5).map(el => ({ tag: el.tagName, class: el.className })) }));
        results.layouts.push({ route, ...overflow });
        if (screenshots.has(route) && width !== 768) await page.screenshot({ path: path.join(output, `${route.replaceAll('/', '_') || 'home'}-${width}.png`), fullPage: true });
      }
      console.log('Layout audit complete:', width);
    }
    await page.goto(admin, { waitUntil: 'networkidle' });
    await page.screenshot({ path: path.join(output, 'admin.png'), fullPage: true });
    async function check(name, run) { try { await run(); results.interactions.push({ name, passed: true }); } catch (error) { results.interactions.push({ name, passed: false, error: error.message }); } console.log(name, results.interactions.at(-1).passed ? 'PASS' : 'FAIL'); }
    await page.setViewportSize({ width: 1440, height: 1000 });
    await check('Store radius/search/reset', async () => {
      await page.goto(base + '/stores', { waitUntil: 'networkidle' });
      await page.getByRole('radio', { name: '500m' }).click();
      assert.match(await page.locator('main').innerText(), /1 store within 500m/);
      await page.getByRole('textbox', { name: 'Search by store name' }).fill('no-match');
      await page.getByRole('heading', { name: 'No stores match these settings' }).waitFor();
      await page.getByRole('button', { name: 'Clear filters' }).click();
      assert.match(await page.locator('main').innerText(), /4 stores within 1km/);
    });
    await check('Account dropdown and mobile navigation', async () => {
      await page.locator('summary').first().click();
      await page.getByRole('link', { name: 'My Profile', exact: true }).waitFor();
      await page.locator('summary').first().click();
      await page.setViewportSize({ width: 360, height: 800 });
      await page.getByRole('button', { name: 'Toggle navigation' }).click();
      await page.getByRole('link', { name: 'Nearby Stores', exact: true }).first().waitFor();
      await page.getByRole('button', { name: 'Toggle navigation' }).click();
      await page.setViewportSize({ width: 1440, height: 1000 });
    });
    await check('Product quantity, add and cross-store confirmation', async () => {
      await page.goto(base + '/product/miniket-rice', { waitUntil: 'networkidle' });
      await page.getByRole('button', { name: 'Increase quantity' }).click();
      await page.getByRole('button', { name: 'Add to cart', exact: true }).click();
      await page.getByRole('status').filter({ hasText: 'added to your cart' }).waitFor();
      await page.goto(base + '/product/seasonal-mangoes', { waitUntil: 'networkidle' });
      await page.getByRole('button', { name: 'Add to cart', exact: true }).click();
      await page.getByRole('dialog').waitFor();
      await page.getByRole('button', { name: 'Cancel', exact: true }).click();
      await page.getByRole('button', { name: 'Add to cart', exact: true }).click();
      await page.getByRole('dialog').getByRole('button', { name: 'Confirm', exact: true }).click();
      await page.getByRole('status').filter({ hasText: 'previous cart was replaced' }).waitFor();
    });
    await check('Cart quantity and clear confirmation cancellation', async () => {
      await page.goto(base + '/cart', { waitUntil: 'networkidle' });
      await page.getByRole('button', { name: 'Increase Seasonal Mangoes' }).click();
      assert.match(await page.locator('main').innerText(), /৳360/);
      await page.getByRole('button', { name: 'Clear cart', exact: true }).click();
      await page.getByRole('dialog').getByRole('button', { name: 'Cancel', exact: true }).click();
      await page.getByRole('link', { name: 'Proceed to Checkout' }).click();
    });
    await check('Checkout validation and confirmation dialog', async () => {
      // Continue the existing cart link flow; a hard reload rehydrates cart state separately.
      await page.waitForURL('**/checkout');
      const name = page.getByLabel(/^Full name/);
      await name.fill('');
      await page.getByRole('button', { name: 'Place Order', exact: true }).click();
      await page.getByText('Full name is required', { exact: true }).waitFor();
      await name.fill('Alex Morgan');
      await page.getByRole('button', { name: 'Place Order', exact: true }).click();
      await page.getByRole('dialog').waitFor();
    });
    await check('Mock order persistence and success navigation', async () => {
      await page.getByRole('dialog').getByRole('button', { name: 'Confirm', exact: true }).click();
      await page.waitForFunction(() => JSON.parse(localStorage.getItem('localmarket-orders') || '[]').some(order => order.id !== 'UI-ORDER-1'));
      results.checkoutPersistence = await page.evaluate(() => ({ orders: JSON.parse(localStorage.getItem('localmarket-orders') || '[]').length, cartLines: JSON.parse(localStorage.getItem('localmarket-cart') || '{}').lines?.length }));
      await page.waitForURL('**/order-success?orderId=*');
      await page.getByRole('heading', { name: 'Your Order Has Been Placed!' }).waitFor();
      await page.getByRole('link', { name: 'Track Order' }).click();
      await page.getByRole('button', { name: 'Copy Order ID' }).waitFor();
    });
    await check('Profile edit validation and save', async () => {
      await page.goto(base + '/account/profile', { waitUntil: 'networkidle' });
      await page.getByRole('button', { name: 'Edit profile' }).click();
      await page.getByLabel('Full name', { exact: true }).fill('');
      await page.getByRole('button', { name: 'Save changes' }).click();
      await page.getByText('Full name is required', { exact: true }).waitFor();
      await page.getByLabel('Full name', { exact: true }).fill('Alex Morgan');
      await page.getByRole('button', { name: 'Save changes' }).click();
      await page.getByText('Profile updated in mock customer state.').waitFor();
    });
    await check('Address dialog save and delete cancellation', async () => {
      await page.goto(base + '/account/addresses', { waitUntil: 'networkidle' });
      await page.getByRole('button', { name: 'Add address', exact: true }).first().click();
      await page.getByLabel('Recipient name').fill('UI Test');
      await page.getByLabel('Mobile number').fill('01712345678');
      await page.getByLabel('Complete address').fill('Test-only address');
      await page.getByLabel('Area / neighborhood').fill('Dhanmondi');
      await page.getByRole('button', { name: 'Save address' }).click();
      await page.getByText('UI Test', { exact: true }).waitFor();
      await page.getByRole('button', { name: 'Delete', exact: true }).last().click();
      await page.getByRole('dialog').getByRole('button', { name: 'Cancel', exact: true }).click();
    });
    await check('Merchant inventory modal adjustment', async () => {
      await page.goto(base + '/merchant/inventory', { waitUntil: 'networkidle' });
      await page.getByRole('button', { name: 'Stock In', exact: true }).first().click();
      await page.getByPlaceholder('Quantity', { exact: true }).fill('1');
      await page.getByRole('button', { name: 'Confirm', exact: true }).click();
      await page.getByText(/stock updated to/).waitFor();
    });
    await check('Merchant settings tabs and switch persistence', async () => {
      await page.goto(base + '/merchant/settings', { waitUntil: 'networkidle' });
      await page.getByRole('button', { name: 'Notifications', exact: true }).click();
      const toggle = page.getByRole('switch').first();
      const before = await toggle.getAttribute('aria-checked');
      await toggle.click();
      assert.notEqual(await toggle.getAttribute('aria-checked'), before);
      await page.getByRole('button', { name: 'Save notification preferences' }).click();
      await page.getByText('Notification preferences saved.', { exact: true }).waitFor();
    });
    await check('Merchant support FAQ and form submission', async () => {
      await page.goto(base + '/merchant/support', { waitUntil: 'networkidle' });
      await page.getByRole('button', { name: 'How do I update my store information?' }).click();
      await page.getByText(/Open Store Management from the merchant navigation/).waitFor();
      await page.getByRole('button', { name: 'Create support request', exact: true }).click();
      const form = page.locator('form');
      await form.locator('input').first().fill('UI verification only');
      await form.locator('textarea').fill('Disposable test ticket for visual regression verification.');
      await form.getByRole('button', { name: 'Submit request' }).click();
      await page.getByText(/was saved as a mock ticket/).waitFor();
    });
    await context.close();
  } finally {
    await browser.close();
    fs.writeFileSync(path.join(output, 'results.json'), JSON.stringify(results, null, 2));
    const overflow = results.layouts.filter(r => r.scroll > r.width + 1);
    console.log(JSON.stringify({ routes: results.routes.length, layouts: results.layouts.length, overflow, interactions: results.interactions, pageErrors: results.pageErrors, imageFailureCount: results.imageFailures.length, output }, null, 2));
    if (overflow.length || results.interactions.some(r => !r.passed)) process.exitCode = 1;
  }
}
main().catch(error => { console.error(error); process.exitCode = 1; });
