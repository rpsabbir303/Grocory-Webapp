import type { Product, Store } from '@hyperlocal/shared-types';
export const mockStores: Store[] = [
  { id: 'store-1', name: 'Shobuj Bazar', ownerId: 'merchant-1', address: 'Dhanmondi, Dhaka', category: 'Grocery & essentials', distanceKm: 0.4, imageUrl: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80', isOpen: true },
  { id: 'store-2', name: 'Nodi Fresh Corner', ownerId: 'merchant-2', address: 'Mohammadpur, Dhaka', category: 'Fruits & vegetables', distanceKm: 0.7, imageUrl: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=800&q=80', isOpen: true },
  { id: 'store-3', name: 'Bhorer Bakery', ownerId: 'merchant-3', address: 'Lalmatia, Dhaka', category: 'Bakery', distanceKm: 0.9, imageUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80', isOpen: false },
  { id: 'store-4', name: 'Lekha Pora Stationery', ownerId: 'merchant-4', address: 'Kalabagan, Dhaka', category: 'Stationery', distanceKm: 1, imageUrl: 'https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?auto=format&fit=crop&w=800&q=80', isOpen: true }
];
export const mockProducts: Product[] = [
  { id: 'product-1', storeId: 'store-1', name: 'Miniket Rice', description: 'Everyday local rice', price: 86, unit: 'per kg', imageUrl: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80', inventory: 24 },
  { id: 'product-2', storeId: 'store-2', name: 'Seasonal Mangoes', description: 'Fresh seasonal fruit', price: 180, unit: 'per kg', imageUrl: 'https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=600&q=80', inventory: 12 },
  { id: 'product-3', storeId: 'store-3', name: 'Butter Bun', description: 'Freshly baked today', price: 45, unit: 'pack of 2', imageUrl: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80', inventory: 0 },
  { id: 'product-4', storeId: 'store-4', name: 'A4 Exercise Book', description: 'Ruled pages for school or work', price: 75, unit: '1 book', imageUrl: 'https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&w=600&q=80', inventory: 18 }
];
export const mockService = {
  async listNearbyStores(): Promise<Store[]> { return mockStores; },
  async listProducts(storeId: string): Promise<Product[]> { return mockProducts.filter((product) => product.storeId === storeId); }
};
