import { ProductDetails } from '../../components/product-details';
export default function ProductPage({ params }: { params: { slug: string } }) { return <ProductDetails slug={params.slug} />; }
