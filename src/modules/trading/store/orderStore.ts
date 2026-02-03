import { create } from 'zustand';
import type { Side, OrderType } from '@/types';

interface OrderFormState {
  side: Side;
  orderType: OrderType;
  price: string;
  size: string;
  percent: number | null;
}

interface OrderFormActions {
  setSide: (side: Side) => void;
  setOrderType: (orderType: OrderType) => void;
  setPrice: (price: string) => void;
  setSize: (size: string) => void;
  setPercent: (percent: number) => void;
  resetForm: () => void;
}

type OrderStore = OrderFormState & OrderFormActions;

const initialState: OrderFormState = {
  side: 'long',
  orderType: 'limit',
  price: '46800',
  size: '',
  percent: null,
};

export const useOrderStore = create<OrderStore>((set) => ({
  ...initialState,
  
  setSide: (side) => set({ side }),
  
  setOrderType: (orderType) => set({ orderType }),
  
  setPrice: (price) => set({ price }),
  
  setSize: (size) => set({ size }),
  
  setPercent: (percent) => set({ percent }),
  
  resetForm: () => set(initialState),
}));