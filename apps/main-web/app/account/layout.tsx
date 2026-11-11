import { MainFooter } from '../components/main-footer';
import { MainHeader } from '../components/main-header';
import { AccountShell } from '../components/account-shell';
export default function AccountLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <><MainHeader /><AccountShell>{children}</AccountShell><MainFooter /></>; }
