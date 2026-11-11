export type UserRole = 'customer' | 'merchant' | 'admin';
export type ApplicationStatus = 'draft' | 'submitted' | 'under_review' | 'approved' | 'rejected' | 'suspended';
export type OrderStatus = 'pending' | 'accepted' | 'packing' | 'out_for_delivery' | 'delivered' | 'cancelled';
export interface User { id: string; name: string; email: string; role: UserRole; }
export interface Store { id: string; name: string; ownerId: string; address: string; category: string; description?: string; distanceKm: number; imageUrl?: string; logoUrl?: string; contactMobile?: string; alternateContact?: string; area?: string; landmark?: string; isOpen: boolean; verified?: boolean; openingHours?: string; deliveryFee?: number; createdAt?: string; }
export interface Product { id: string; storeId: string; name: string; description: string; category?: string; conditionNote?: string; price: number; unit: string; imageUrl?: string; imageUrls?: string[]; inventory: number; active?: boolean; updatedAt?: string; }
export interface OrderItem { productId: string; quantity: number; unitPrice: number; }
export interface Order { id: string; customerId: string; storeId: string; items: OrderItem[]; status: OrderStatus; total: number; subtotal?: number; deliveryFee?: number; paymentMethod?: 'cod'; createdAt?: string; customerName?: string; mobile?: string; deliveryAddress?: string; area?: string; deliveryInstructions?: string; }
export interface CustomerAddress { id: string; label: string; fullName: string; mobile: string; address: string; area: string; instructions?: string; }
export interface MerchantApplication { id: string; applicantId: string; businessName: string; merchantName?: string; mobile?: string; category?: string; description?: string; address?: string; area?: string; landmark?: string; status: ApplicationStatus; submittedAt?: string; rejectionReason?: string; suspensionReason?: string; documentsReady?: boolean; }
export interface Subscription { id: string; merchantId: string; plan: string; status: 'active' | 'past_due' | 'cancelled'; }
