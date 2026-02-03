import { ChangeEvent } from 'react';

interface PriceInputProps {
  value: string;
  onChange: (value: string) => void;
  label?: string;
  suffix?: string;
  placeholder?: string;
}

/**
 * TODO: Реализовать компонент
 *
 * Инпут с лейблом и суффиксом (например "USDC")
 * Только числовые значения
 *
 * CSS классы готовы: .input-field, .input-wrapper, .input-suffix
 */
export function PriceInput({ value, onChange, suffix, placeholder }: PriceInputProps) {
  return (
    <div className="input-wrapper">
      <input
        type="text"
        className="input-field"
        placeholder={placeholder}
        value={value}
        onChange={(event: ChangeEvent<HTMLInputElement>) => onChange(event.target.value)}
      />
      <span className="input-suffix">{suffix}</span>
    </div>
  );
}
