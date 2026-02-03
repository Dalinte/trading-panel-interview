import { useOrderStore } from '@/modules/trading/store/orderStore';

import { SideTabs } from './SideTabs.tsx';
import { OrderTypeSelector } from './OrderTypeSelector.tsx';
import { PriceInput } from './PriceInput.tsx';
import { PercentSlider } from './PercentSlider.tsx';
import { SizeInput } from './SizeInput.tsx';
import { SubmitButton } from './SubmitButton.tsx';
import { calculatePosition } from '@/utils/calculations.ts';
import { useOrderManager } from '@/modules/trading/hooks/useOrderManager.ts';

export function TradingPanel() {
  const {
    side,
    orderType,
    price,
    size,
    percent,
    setSide,
    setOrderType,
    setPrice,
    setSize,
    setPercent,
  } = useOrderStore();

  const { isLoading, createLimitOrder } = useOrderManager();

  const handleSubmit = () => {
    createLimitOrder();
  };

  // Available balance (mock data)
  const availableBalance = 10000; // USDC

  return (
    <div className="trading-panel">
      <div className="panel-header">
        <h2>Трейдинг</h2>
      </div>

      <div className="component-placeholder">
        <SideTabs value={side} onChange={setSide} />
      </div>

      <div className="component-placeholder">
        <OrderTypeSelector value={orderType} onChange={setOrderType} />
      </div>

      <div className="balance-row">
        <span>Доступно</span>
        <span>{availableBalance.toLocaleString()} USDC</span>
      </div>

      <div className="component-placeholder">
        <PriceInput value={price} suffix="USDC" placeholder="Цена" onChange={setPrice} />
      </div>

      <div className="component-placeholder">
        <SizeInput value={size} suffix="BTC" placeholder="Количество" onChange={setSize} />
      </div>

      <div className="component-placeholder">
        <PercentSlider value={percent} onChange={setPercent} />
      </div>

      <div className="summary">
        <div className="summary-row">
          <span>Стоимость ордера</span>
          <span>
            {
              calculatePosition({
                side,
                size: Number(size),
                entryPrice: Number(price),
                leverage: 1,
              }).notionalValue
            }{' '}
            USDC
          </span>
        </div>
      </div>

      <div className="component-placeholder">
        <SubmitButton
          side={side}
          disabled={
            !Number(size) ||
            !Number(price) ||
            // isInsufficientMargin ||
            isLoading
          }
          loading={isLoading}
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
}
