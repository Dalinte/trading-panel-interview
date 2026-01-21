import type { Side } from '@/types'

interface SubmitButtonProps {
  side: Side
  disabled?: boolean
  loading?: boolean
  onClick: () => void
}

/**
 * TODO: Реализовать компонент
 * 
 * Кнопка "Купить BTC" (зелёная) или "Продать BTC" (красная)
 * Показывает спиннер при loading
 * Блокируется при disabled или loading
 * 
 * CSS классы готовы: .submit-btn, .submit-btn.buy, .submit-btn.sell, .spinner
 */
export function SubmitButton({ side, disabled, loading, onClick }: SubmitButtonProps) {
  return (
    <button disabled>TODO: SubmitButton</button>
  )
}
