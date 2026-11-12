import { MerchantDashboardShell } from '../components/merchant-dashboard-shell';

export default function MerchantLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <MerchantDashboardShell>{children}</MerchantDashboardShell>;
}
