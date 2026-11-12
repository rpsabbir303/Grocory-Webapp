'use client';
import { useEffect } from 'react';

const storageKey = 'localmarket-merchant-application';
const fixture = {
  id: 'UI-APP',
  applicantId: 'customer-1',
  businessName: 'Shobuj Bazar',
  merchantName: 'Alex Morgan',
  status: 'approved',
  mobile: '01712345678',
  category: 'Grocery',
  address: 'Mock address',
  area: 'Dhanmondi'
} as const;

export function DevMerchantFixture() {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production' || window.location.search !== '?devMerchantFixture=1') return;
    if (!window.localStorage.getItem(storageKey)) {
      window.localStorage.setItem(storageKey, JSON.stringify(fixture));
      window.location.reload();
    }
  }, []);
  return null;
}
