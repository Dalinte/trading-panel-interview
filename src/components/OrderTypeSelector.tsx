export type OrderType = 'limit' | 'market'

interface OrderTypeSelectorProps {
  value: OrderType
  onChange: (type: OrderType) => void
}

/**
 * TODO: Реализовать компонент
 * 
 * Две кнопки: "Лимитный" и "Рыночный"
 * Активная кнопка выделена
 * 
 * CSS классы готовы: .order-types, .order-type, .order-type.active
 */
export function OrderTypeSelector({ value, onChange }: OrderTypeSelectorProps) {
  return (
    <div>TODO: OrderTypeSelector</div>
  )
}
