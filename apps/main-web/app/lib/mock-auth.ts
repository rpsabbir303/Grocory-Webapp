export type MockAuthState = 'guest' | 'customer' | 'pending-merchant' | 'approved-merchant' | 'dual-role';
export const mockAuthStates: Array<{ id: MockAuthState; label: string }> = [
  { id: 'guest', label: 'Guest user' }, { id: 'customer', label: 'Logged-in customer' },
  { id: 'pending-merchant', label: 'Pending merchant' }, { id: 'approved-merchant', label: 'Approved merchant' },
  { id: 'dual-role', label: 'Customer + merchant' }
];
export const defaultAuthState: MockAuthState = 'customer';
