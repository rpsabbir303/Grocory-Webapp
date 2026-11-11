import type { CustomerAddress } from '@hyperlocal/shared-types';
const addressKey = 'localmarket-addresses'; const wishlistKey = 'localmarket-wishlist';
export const readAddresses = (): CustomerAddress[] => { if (typeof window === 'undefined') return []; try { return JSON.parse(window.localStorage.getItem(addressKey) ?? 'null') ?? []; } catch { return []; } };
export const saveAddresses = (items: CustomerAddress[]) => window.localStorage.setItem(addressKey, JSON.stringify(items));
export const readWishlist = (): string[] => { if (typeof window === 'undefined') return []; try { return JSON.parse(window.localStorage.getItem(wishlistKey) ?? '[]'); } catch { return []; } };
export const saveWishlist = (items: string[]) => window.localStorage.setItem(wishlistKey, JSON.stringify(items));
