import { SideTabs } from './SideTabs.tsx';
import { OrderTypeSelector } from './OrderTypeSelector.tsx';
import { FormInput } from './FormInput.tsx';
import { PercentSlider } from './PercentSlider.tsx';
import { SubmitButton } from './SubmitButton.tsx';
import { useOrderManager } from '../hooks/useOrderManager.ts';
import { useOrderPosition } from '../hooks/useOrderPosition.ts';
import { useOrderValidation } from '../hooks/useOrderValidation.ts';
import Balance from '@/modules/trading/components/Balance.tsx';

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

  const { position, handleChangePercent, formatedNotionalValue } = useOrderPosition();
  const { validation } = useOrderValidation(position);

  return (
    <div className="trading-panel">
      <div className="panel-header">
        <h2>Трейдинг</h2>
      </div>

      <div className="component-placeholder">
        <SideTabs value={side} onChange={setSide} />
      </div>

      {/* Скрыто до реализации */}
      <div className="component-placeholder" style={{ display: 'none' }}>
        <OrderTypeSelector value={orderType} onChange={setOrderType} />
      </div>

      <div className="balance-row">
        <span>Доступно</span>
        <Balance/>
      </div>

      <div className="component-placeholder">
        <FormInput value={price} suffix="USDC" placeholder="Цена" onChange={setPrice} />
      </div>

      <div className="component-placeholder">
        <FormInput value={size} suffix="BTC" placeholder="Количество" onChange={setSize} />
      </div>

      <div className="component-placeholder">
        <PercentSlider value={percent} onChange={handleChangePercent} />
      </div>

      <div className="summary">
        <div className="summary-row">
          <span>Стоимость ордера</span>
          <span>{`${formatedNotionalValue} USDC`}</span>
        </div>
        <div className="input-error">
          {validation.errors.map(error => (
            <span key={error}>{error}</span>
          ))}
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
