import { useMemo } from 'react';
import { calculatePosition, validatePosition } from '../utils/calculations.ts';
import { useOrderStore } from '../store/orderStore.ts';
import { availableBalance } from '../consts';

export const useOrderPosition = () => {
  const { side, size, price, setPercent, setSize } = useOrderStore();

  const handleChangePercent = (value: number) => {
    setPercent(value);
    const calculatedSize = (availableBalance * value) / 100;
    setSize(String(calculatedSize));
  };

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
    validation,
    handleChangePercent
  }
};
