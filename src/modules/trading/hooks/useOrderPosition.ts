import { useCallback, useMemo } from 'react';
import { calculatePosition, calculateSizeFromPercent } from '../utils/calculations.ts';
import { useOrderStore } from '../store/orderStore.ts';
import { AVAILABLE_BALANCE } from '../consts';

export const useOrderPosition = () => {
  const { side, size, price, setPercent, setSize } = useOrderStore();

  const handleChangePercent = useCallback(
    (percent: number) => {
      const calculatedSize = calculateSizeFromPercent(
        {
          side: side,
          size: parseFloat(size),
          entryPrice: parseFloat(price),
          leverage: 1,
        },
        side === 'long' ?  AVAILABLE_BALANCE.USDC : AVAILABLE_BALANCE.BTC,
        percent
      );

      setPercent(percent);
      setSize((calculatedSize || 0).toFixed(8));
    },
    [side, size, price, setPercent, setSize]
  );

  const position = useMemo(() => {
    return calculatePosition({
      side: side,
      size: parseFloat(size),
      entryPrice: parseFloat(price),
      leverage: 1,
    });
  }, [side, size, price]);

  const formatedNotionalValue = useMemo(() => {
    return new Intl.NumberFormat('ru-RU', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(position.notionalValue || 0)
  }, [position.notionalValue])

  return {
    position,
    formatedNotionalValue,
    handleChangePercent,
  };
};
