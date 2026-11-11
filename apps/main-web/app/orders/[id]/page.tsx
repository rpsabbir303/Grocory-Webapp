import { OrderDetails } from '../../components/order-details';
export default async function OrderDetailsRoute({ params }: { params: Promise<{ id: string }> }) { const { id } = await params; return <OrderDetails orderId={id} />; }
