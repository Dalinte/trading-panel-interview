import { validatePosition } from '../utils/calculations.ts';
import { useOrderStore } from '../store/orderStore.ts';
import { useMemo } from 'react';
import type { CalculatedValues } from '@/types';
import { AVAILABLE_BALANCE } from '@/modules/trading/consts';

// TODO: Поменять валидацию на formic + yup
export const useOrderValidation = (position: CalculatedValues) => {
  const { side, size, price} = useOrderStore();

  const validation = useMemo(() => {
    return validatePosition({
      side: side,
      size: parseFloat(size),
      entryPrice: parseFloat(price),
      leverage: 1,
    }, position, side === 'long' ? AVAILABLE_BALANCE.USDC : AVAILABLE_BALANCE.BTC)
  }, [side, size, price, position])

  return {
    validation
  }
}