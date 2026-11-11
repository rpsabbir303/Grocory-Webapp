'use client';
import { usePathname } from 'next/navigation';
import { MainFooter } from './main-footer';
import { MainHeader } from './main-header';
export function MainWebsiteFrame({ children }: Readonly<{ children: React.ReactNode }>) { const pathname = usePathname(); const merchantRoute = pathname.startsWith('/merchant'); return <>{!merchantRoute && <MainHeader />}{children}{!merchantRoute && <MainFooter />}</>; }
