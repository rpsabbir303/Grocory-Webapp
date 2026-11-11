import { notFound, redirect } from 'next/navigation';
import { mockStores } from '@hyperlocal/api-client';
import { slugify } from '../../lib/slug';
export default function LegacyStoreRedirect({ params }: { params: { id: string } }) { const store = mockStores.find((item) => item.id === params.id); if (!store) notFound(); redirect(`/store/${slugify(store.name)}`); }
