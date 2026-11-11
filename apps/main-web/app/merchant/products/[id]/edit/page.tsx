import { ProductForm } from '../../../../components/merchant-products';
export default function EditProductPage({ params }: { params: { id: string } }) { return <ProductForm productId={params.id} />; }
