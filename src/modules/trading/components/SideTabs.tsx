import type { Side } from '@/types';

interface SideTabsProps {
  value: Side;
  onChange: (side: Side) => void;
}

/**
 * TODO: Реализовать компонент
 *
 * Две кнопки: "Buy" (long) и "Sell" (short)
 * Активная кнопка выделена цветом (зелёный/красный)
 *
 * CSS классы готовы: .side-tabs, .side-tab, .side-tab.buy.active, .side-tab.sell.active
 */
export function SideTabs({ value, onChange }: SideTabsProps) {
  return (
    <div className="side-tabs">
      <button
        className={`side-tab buy ${value === 'long' && 'active'}`}
        onClick={() => onChange('long')}
      >
        Buy
      </button>
      <button
        className={`side-tab sell ${value === 'short' && 'active'}`}
        onClick={() => onChange('short')}
      >
        Sell
      </button>
    </div>
  );
}
