'use client';
import { createContext, useContext, useMemo, useState, type PropsWithChildren } from 'react';
import type { Product } from '@hyperlocal/shared-types';
export interface CartLine { product: Product; quantity: number; }
interface CartContextValue { storeId?: string; lines: CartLine[]; itemCount: number; addItem: (product: Product) => boolean; replaceWith: (product: Product, quantity?: number) => void; }
const CartContext = createContext<CartContextValue | null>(null);
export function CartProvider({ children }: PropsWithChildren) { const [storeId, setStoreId] = useState<string>(); const [lines, setLines] = useState<CartLine[]>([]); const addItem = (product: Product) => { if (storeId && storeId !== product.storeId) return false; setStoreId(product.storeId); setLines((current) => { const existing = current.find((line) => line.product.id === product.id); return existing ? current.map((line) => line.product.id === product.id ? { ...line, quantity: line.quantity + 1 } : line) : [...current, { product, quantity: 1 }]; }); return true; }; const replaceWith = (product: Product, quantity = 1) => { setStoreId(product.storeId); setLines([{ product, quantity }]); }; const value = useMemo(() => ({ storeId, lines, itemCount: lines.reduce((total, line) => total + line.quantity, 0), addItem, replaceWith }), [lines, storeId]); return <CartContext.Provider value={value}>{children}</CartContext.Provider>; }
export function useCart() { const context = useContext(CartContext); if (!context) throw new Error('useCart must be used within CartProvider'); return context; }
