import type { MerchantApplication } from '@hyperlocal/shared-types';
const key = 'localmarket-merchant-application';
export const readMerchantApplication = (): MerchantApplication | undefined => { if (typeof window === 'undefined') return undefined; try { return JSON.parse(window.localStorage.getItem(key) ?? 'null') ?? undefined; } catch { return undefined; } };
export const saveMerchantApplication = (application: MerchantApplication) => window.localStorage.setItem(key, JSON.stringify(application));
export const temporaryDocuments: { nid?: File; shop?: File } = {};
