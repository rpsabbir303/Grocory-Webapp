import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@hyperlocal/ui';
const categories = ['Grocery', 'Fruits & Vegetables', 'Bakery', 'Stationery', 'Household Essentials'];
export const metadata: Metadata = { title: 'Categories | LocalMarket', description: 'Browse supported local shopping categories.' };
export default function CategoriesPage() { return <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8"><Link href="/" className="text-sm font-semibold text-teal-800">← Back to home</Link><p className="mt-8 text-sm font-semibold text-teal-700">Browse by need</p><h1 className="mt-2 text-4xl font-bold">Categories</h1><p className="mt-3 max-w-2xl text-slate-600">Explore the categories currently supported by the LocalMarket catalogue.</p><div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">{categories.map((category) => <Link key={category} href={`/stores?category=${encodeURIComponent(category)}`}><Card className="h-full hover:border-teal-300"><h2 className="font-semibold">{category}</h2><p className="mt-2 text-sm text-slate-500">Find nearby stores offering {category.toLowerCase()}.</p></Card></Link>)}</div></main>; }
