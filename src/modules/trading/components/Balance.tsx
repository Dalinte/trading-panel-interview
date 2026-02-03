import { AVAILABLE_BALANCE } from '@/modules/trading/consts';
import { useOrderManager } from '@/modules/trading/hooks/useOrderManager.ts';

const Balance = () => {
  const { side } = useOrderManager();

  const formatedBalance = new Intl.NumberFormat('ru-RU', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(side === 'long' ? AVAILABLE_BALANCE.USDC : AVAILABLE_BALANCE.BTC);

  return (
    <span>
      {formatedBalance}
      {side === 'long' ? ' USDC' : ' BTC'}
    </span>
  );
};
export default Balance;
