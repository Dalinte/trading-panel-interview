import { OrderType } from '@/types';

interface OrderTypeSelectorProps {
  value: OrderType;
  onChange: (type: OrderType) => void;
}

export function OrderTypeSelector({ value, onChange }: OrderTypeSelectorProps) {
  return (
    <div className="order-types">
      <button
        className={`order-type ${value === 'limit' && 'active'}`}
        onClick={() => onChange('limit')}
      >
        Limit
      </button>
      <button
        className={`order-type ${value === 'market' && 'active'}`}
        onClick={() => onChange('market')}
      >
        Market
      </button>
    </div>
  );
}
