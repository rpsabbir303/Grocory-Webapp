import { OrderDetails } from '../../components/order-details';
export default function OrderDetailsRoute({ params }: { params: { id: string } }) { return <OrderDetails orderId={params.id} />; }
