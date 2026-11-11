export type UserRole = 'customer' | 'merchant' | 'admin';
export type ApplicationStatus = 'draft' | 'submitted' | 'under_review' | 'approved' | 'rejected';
export type OrderStatus = 'pending' | 'confirmed' | 'preparing' | 'ready' | 'completed' | 'cancelled';
export interface User { id: string; name: string; email: string; role: UserRole; }
export interface Store { id: string; name: string; ownerId: string; address: string; category: string; description?: string; distanceKm: number; imageUrl?: string; logoUrl?: string; isOpen: boolean; verified?: boolean; openingHours?: string; deliveryFee?: number; }
export interface Product { id: string; storeId: string; name: string; description: string; category?: string; conditionNote?: string; price: number; unit: string; imageUrl?: string; imageUrls?: string[]; inventory: number; }
export interface OrderItem { productId: string; quantity: number; unitPrice: number; }
export interface Order { id: string; customerId: string; storeId: string; items: OrderItem[]; status: OrderStatus; total: number; }
export interface MerchantApplication { id: string; applicantId: string; businessName: string; status: ApplicationStatus; }
export interface Subscription { id: string; merchantId: string; plan: string; status: 'active' | 'past_due' | 'cancelled'; }
