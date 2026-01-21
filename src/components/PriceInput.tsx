interface PriceInputProps {
  value: string
  onChange: (value: string) => void
  label?: string
  suffix?: string
  placeholder?: string
}

/**
 * TODO: Реализовать компонент
 * 
 * Инпут с лейблом и суффиксом (например "USDC")
 * Только числовые значения
 * 
 * CSS классы готовы: .input-field, .input-wrapper, .input-suffix
 */
export function PriceInput({ value, onChange, label, suffix, placeholder }: PriceInputProps) {
  return (
    <div>TODO: PriceInput</div>
  )
}
