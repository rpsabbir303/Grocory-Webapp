import { MerchantOrderDetails } from '../../../components/merchant-orders';
export default function MerchantOrderDetailsPage({ params }: { params: { id: string } }) { return <MerchantOrderDetails orderId={params.id} />; }
