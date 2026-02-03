import { SideTabs } from './SideTabs.tsx';
import { OrderTypeSelector } from './OrderTypeSelector.tsx';
import { PriceInput } from './PriceInput.tsx';
import { PercentSlider } from './PercentSlider.tsx';
import { SizeInput } from './SizeInput.tsx';
import { SubmitButton } from './SubmitButton.tsx';
import { useOrderManager } from '../hooks/useOrderManager.ts';
import { useOrderPosition } from '../hooks/useOrderPosition.ts';
import { availableBalance } from '../consts';

export function TradingPanel() {
  const {
    isLoading,
    createLimitOrder,
    setSize,
    side,
    setSide,
    orderType,
    setOrderType,
    price,
    setPrice,
    size,
    percent,
  } = useOrderManager();

  const { position, validation, handleChangePercent } = useOrderPosition();

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
        <span>{availableBalance} USDC</span>
      </div>

      <div className="component-placeholder">
        <PriceInput value={price} suffix="USDC" placeholder="Цена" onChange={setPrice} />
      </div>

      <div className="component-placeholder">
        <SizeInput value={size} suffix="BTC" placeholder="Количество" onChange={setSize} />
      </div>

      <div className="component-placeholder">
        <PercentSlider value={percent} onChange={handleChangePercent} />
      </div>

      <div className="summary">
        <div className="summary-row">
          <span>Стоимость ордера</span>
          <span>{`${position.notionalValue} USDC`}</span>
        </div>
      </div>

      <div className="component-placeholder">
        <SubmitButton
          side={side}
          disabled={!validation.isValid || isLoading}
          loading={isLoading}
          onClick={createLimitOrder}
        />
      </div>
    </div>
  );
}
