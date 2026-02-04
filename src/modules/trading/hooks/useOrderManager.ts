import { useState } from 'react';
import { createOrder, getOrderStatus } from '@/api/mock';
import { useOrderStore } from '../store/orderStore.ts';
import { showOrderNotification } from '../utils/showOrderNotification.ts';
import { hapticFeedback } from '@tma.js/sdk-react';

export function useOrderManager() {
  const [isLoading, setIsLoading] = useState(false);
  const orderStore = useOrderStore();

  const createLimitOrder = async () => {
    setIsLoading(true);

    if (hapticFeedback.isSupported()) {
      hapticFeedback.impactOccurred('heavy');
    }

    const { orderId } = await createOrder({
      side: orderStore.side,
      entryPrice: parseFloat(orderStore.price),
      size: parseFloat(orderStore.size),
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
          orderStore.resetForm();
          hapticFeedback.notificationOccurred('error');
          setIsLoading(false);
          break;
        case 'filled':
          setIsLoading(false);
          hapticFeedback.notificationOccurred('success');
          orderStore.resetForm();
      }
    };

    checkOrderStatus();
  };

  return {
    isLoading,
    createLimitOrder,
    ...orderStore,
  };
}
