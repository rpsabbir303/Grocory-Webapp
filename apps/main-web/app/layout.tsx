import './globals.css';
import type { Metadata } from 'next';
import { CartProvider } from './lib/cart-context';
export const metadata: Metadata = { title: 'LocalMarket', description: 'Customer and merchant web application' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body><CartProvider>{children}</CartProvider></body></html>; }
