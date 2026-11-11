export const required = (value: string, label: string) => value.trim() ? null : `${label} is required`;
export const isEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
