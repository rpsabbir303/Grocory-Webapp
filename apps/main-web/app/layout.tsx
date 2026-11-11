import './globals.css';
import type { Metadata } from 'next';
import { CartProvider } from './lib/cart-context';
import { AuthProvider } from './lib/auth-context';
import { MainWebsiteFrame } from './components/main-website-frame';
export const metadata: Metadata = { title: 'LocalMarket', description: 'Customer and merchant web application' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body><AuthProvider><CartProvider><MainWebsiteFrame>{children}</MainWebsiteFrame></CartProvider></AuthProvider></body></html>; }
