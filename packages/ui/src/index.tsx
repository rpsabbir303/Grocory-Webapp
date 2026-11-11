import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';
export function Button({ children, className = '', ...props }: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>) { return <button className={`rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white ${className}`} {...props}>{children}</button>; }
export function Card({ children, className = '' }: PropsWithChildren<{ className?: string }>) { return <section className={`rounded-xl border border-slate-200 bg-white p-6 shadow-sm ${className}`}>{children}</section>; }
