import { Storefront } from '../../components/storefront';
export default function StorePage({ params }: { params: { slug: string } }) { return <Storefront slug={params.slug} />; }
