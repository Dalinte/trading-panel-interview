import {OrderType} from "@/types";

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
    <div className='order-types'>
      <button className={`order-type ${value === 'limit' && 'active' }`} onClick={() => onChange('limit')}>Limit</button>
      <button className={`order-type ${value === 'market' && 'active' }`} onClick={() => onChange('market')}>Market</button>
    </div>
  )
}
