import './globals.css';
import type { Metadata } from 'next';
import { CartProvider } from './lib/cart-context';
import { AuthProvider } from './lib/auth-context';
export const metadata: Metadata = { title: 'LocalMarket', description: 'Customer and merchant web application' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body><AuthProvider><CartProvider>{children}</CartProvider></AuthProvider></body></html>; }
