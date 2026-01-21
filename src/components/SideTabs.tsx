import type { Side } from '@/types'

interface SideTabsProps {
  value: Side
  onChange: (side: Side) => void
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
    <div>TODO: SideTabs</div>
  )
}
