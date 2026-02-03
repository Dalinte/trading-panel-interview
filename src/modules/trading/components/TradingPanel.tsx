import { useState } from 'react';
import { OrderType, Side } from '@/types';
import { SideTabs } from '../../../components/SideTabs.tsx';
import { OrderTypeSelector } from '@/components/OrderTypeSelector.tsx';
import { PriceInput } from '@/components/PriceInput.tsx';
import { PercentSlider, SizeInput, SubmitButton } from '@/components';
import { calculatePosition } from '@/utils/calculations.ts';

export function TradingPanel() {
  const [side, setSide] = useState<Side>('long');
  const [orderType, setOrderType] = useState<OrderType>('limit');
  const [price, setPrice] = useState<string>('');
  const [size, setSize] = useState<string>('');
  const [percent, setPercent] = useState<number>(25);

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
        <SubmitButton side={side} onClick={() => {}} />
      </div>
    </div>
  );
}
