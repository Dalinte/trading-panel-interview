import { useMemo } from 'react';
import { calculatePosition, validatePosition } from '@/utils/calculations.ts';
import { useOrderStore } from '@/modules/trading/store/orderStore.ts';

export const useOrderPosition = () => {
  const { side, size, price } = useOrderStore();

  const position = useMemo(() => {
    return calculatePosition({
      side: side,
      size: parseFloat(size),
      entryPrice: parseFloat(price),
      leverage: 1,
    });
  }, [side, size, price]);

  const validation = useMemo(() => {
    return validatePosition({
      side: side,
      size: parseFloat(size),
      entryPrice: parseFloat(price),
      leverage: 1,
    }, position)
  }, [side, size, price, position])

  return {
    position,
    validation
  }
};
