import { MainFooter } from '../components/main-footer';
import { MainHeader } from '../components/main-header';
export default function AccountLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <><MainHeader />{children}<MainFooter /></>; }
