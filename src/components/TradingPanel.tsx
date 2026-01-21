import { useState } from 'react'
import type { Side } from '@/types'

// TODO: Import your components
// import { SideTabs } from './SideTabs'
// import { OrderTypeSelector } from './OrderTypeSelector'
// import { PriceInput } from './PriceInput'
// import { SizeInput } from './SizeInput'
// import { PercentSlider } from './PercentSlider'
// import { SubmitButton } from './SubmitButton'

export function TradingPanel() {
  const [side, setSide] = useState<Side>('long')

  // Available balance (mock data)
  const availableBalance = 10000 // USDC

  return (
    <div className="trading-panel">
      <div className="panel-header">
        <h2>Трейдинг</h2>
      </div>

      {/* 
        КОМПОНЕНТ 1: SideTabs
        Props: value: Side, onChange: (side: Side) => void
        Табы "Buy" (long) / "Sell" (short)
      */}
      <div className="component-placeholder">
        <span>SideTabs</span>
        {/* <SideTabs value={side} onChange={setSide} /> */}
      </div>

      {/* 
        КОМПОНЕНТ 2: OrderTypeSelector
        Props: value: 'limit' | 'market', onChange: (type) => void
        Табы "Лимитный" / "Рыночный"
      */}
      <div className="component-placeholder">
        <span>OrderTypeSelector</span>
      </div>

      <div className="balance-row">
        <span>Доступно</span>
        <span>{availableBalance.toLocaleString()} USDC</span>
      </div>

      {/* 
        КОМПОНЕНТ 3: PriceInput
        Props: value: string, onChange: (value: string) => void, label: string
        Инпут для цены с лейблом
      */}
      <div className="component-placeholder">
        <span>PriceInput</span>
      </div>

      {/* 
        КОМПОНЕНТ 4: SizeInput
        Props: value: string, onChange: (value: string) => void, currency: string
        Инпут для количества
      */}
      <div className="component-placeholder">
        <span>SizeInput</span>
      </div>

      {/* 
        КОМПОНЕНТ 5: PercentSlider
        Props: value: number, onChange: (percent: number) => void
        Кнопки/слайдер 25% / 50% / 75% / 100%
      */}
      <div className="component-placeholder">
        <span>PercentSlider (25/50/75/100%)</span>
      </div>

      {/* Calculated values - will be shown after implementation */}
      <div className="summary">
        <div className="summary-row">
          <span>Стоимость ордера</span>
          <span>— USDC</span>
        </div>
      </div>

      {/* 
        КОМПОНЕНТ 6: SubmitButton
        Props: side: Side, disabled: boolean, loading: boolean, onClick: () => void
        Кнопка "Купить BTC" / "Продать BTC"
      */}
      <div className="component-placeholder">
        <span>SubmitButton</span>
      </div>
    </div>
  )
}
