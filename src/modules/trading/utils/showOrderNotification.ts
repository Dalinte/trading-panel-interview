import { toast } from 'sonner';
import { OrderStatus, OrderStatusResponse } from '@/types';

export const showOrderNotification = (orderStatus: OrderStatusResponse, orderId: string) => {
  const statusHandlers: Record<OrderStatus, () => void> = {
    pending: () => toast.loading(`Ордер ${orderId} создан`, { id: orderId }),
    accepted: () => toast.loading(`Ордер ${orderId} принят`, { id: orderId }),
    filled: () => toast.success(`Ордер ${orderId} выполнен на ${orderStatus.filledSize} BTC`, { id: orderId }),
    rejected: () => toast.error(`Ордер ${orderId} отклонен по причине: ${orderStatus.reason}`, { id: orderId }),
  };

  const handler = statusHandlers[orderStatus.status];
  handler();
};
