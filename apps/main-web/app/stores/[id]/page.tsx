import { notFound, redirect } from 'next/navigation';
import { mockStores } from '@hyperlocal/api-client';
import { slugify } from '../../lib/slug';
export default async function LegacyStoreRedirect({ params }: { params: Promise<{ id: string }> }) { const { id } = await params; const store = mockStores.find((item) => item.id === id); if (!store) notFound(); redirect(`/store/${slugify(store.name)}`); }
