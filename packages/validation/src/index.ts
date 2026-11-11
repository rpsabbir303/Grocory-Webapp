export const required = (value: string, _label: string) => value.trim().length > 0;
export const isEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
export const isBangladeshMobile = (value: string) => /^(?:\+8801|01)[3-9]\d{8}$/.test(value.replace(/[\s-]/g, ''));
