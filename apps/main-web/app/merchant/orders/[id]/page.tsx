import { MerchantOrderDetails } from '../../../components/merchant-orders';
export default async function MerchantOrderDetailsPage({ params }: { params: Promise<{ id: string }> }) { const { id } = await params; return <MerchantOrderDetails orderId={id} />; }
