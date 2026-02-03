import { useState } from 'react';
import { createOrder, getOrderStatus } from '@/api/mock';
import { useOrderStore } from '../store/orderStore.ts';
import { showOrderNotification } from '../utils/showOrderNotification.ts';

export function useOrderManager() {
  const [isLoading, setIsLoading] = useState(false);
  const { side, price, size, resetForm } = useOrderStore();

  const createLimitOrder = async () => {
    setIsLoading(true);

    const { orderId } = await createOrder({
      side,
      entryPrice: parseFloat(price),
      size: parseFloat(size),
      leverage: 1,
    });

    const checkOrderStatus = async () => {
      const status = await getOrderStatus(orderId);

      showOrderNotification(status, orderId);

      switch (status.status) {
        case 'pending':
        case 'accepted':
          setTimeout(checkOrderStatus, 1000);
          break;
        case 'rejected':
          resetForm();
          setIsLoading(false);
          break;
        case 'filled':
          setIsLoading(false);
          resetForm();
      }
    };

    checkOrderStatus();
  };

  return {
    isLoading,
    createLimitOrder,
    resetForm,
  };
}
