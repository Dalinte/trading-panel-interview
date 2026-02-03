import type { Side } from '@/types';

interface SubmitButtonProps {
  side: Side;
  disabled?: boolean;
  loading?: boolean;
  onClick: () => void;
}

export function SubmitButton({ side, disabled, loading, onClick }: SubmitButtonProps) {
  return (
    <button
      className={`submit-btn ${side === 'long' ? 'buy' : 'sell'}`}
      disabled={disabled || loading}
      onClick={onClick}
    >
      {loading && <span className="spinner"></span>}
      {!loading && (side === 'long' ? 'Купить BTC' : 'Продать BTC')}
    </button>
  );
}
