import type { Product, Store } from '@hyperlocal/shared-types';
export const mockStores: Store[] = [];
export const mockProducts: Product[] = [];
export const mockService = {
  async listNearbyStores(): Promise<Store[]> { return mockStores; },
  async listProducts(storeId: string): Promise<Product[]> { return mockProducts.filter((product) => product.storeId === storeId); }
};
