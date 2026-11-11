export type UserRole = 'customer' | 'merchant' | 'admin';
export type ApplicationStatus = 'draft' | 'submitted' | 'under_review' | 'approved' | 'rejected';
export type OrderStatus = 'pending' | 'confirmed' | 'preparing' | 'ready' | 'completed' | 'cancelled';
export interface User { id: string; name: string; email: string; role: UserRole; }
export interface Store { id: string; name: string; ownerId: string; address: string; category: string; distanceKm: number; imageUrl?: string; isOpen: boolean; }
export interface Product { id: string; storeId: string; name: string; description: string; price: number; unit: string; imageUrl?: string; inventory: number; }
export interface OrderItem { productId: string; quantity: number; unitPrice: number; }
export interface Order { id: string; customerId: string; storeId: string; items: OrderItem[]; status: OrderStatus; total: number; }
export interface MerchantApplication { id: string; applicantId: string; businessName: string; status: ApplicationStatus; }
export interface Subscription { id: string; merchantId: string; plan: string; status: 'active' | 'past_due' | 'cancelled'; }
