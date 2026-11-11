import { MainFooter } from '../components/main-footer';
import { MainHeader } from '../components/main-header';
export default function PublicLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <><MainHeader />{children}<MainFooter /></>; }
