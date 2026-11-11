import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Hyper-local Admin', description: 'Separate super admin application' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
