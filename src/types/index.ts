export type Side = 'long' | 'short';
export type OrderType = 'limit' | 'market';

export type OrderStatus = 'pending' | 'accepted' | 'rejected' | 'filled';

export interface PositionInput {
  side: Side;
  entryPrice: number;
  size: number;
  leverage: number;
}

export interface CalculatedValues {
  notionalValue: number;
  requiredMargin: number;
  maintenanceMargin: number;
  liquidationPrice: number;
}

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

export interface Order {
  orderId: string;
  status: OrderStatus;
  filledSize?: number;
  reason?: string;
}

export interface OrderStatusResponse {
  status: OrderStatus
  filledSize?: number;
  reason?: string;
}