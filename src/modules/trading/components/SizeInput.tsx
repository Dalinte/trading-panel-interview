import { ChangeEvent } from 'react';

interface SizeInputProps {
  value: string;
  onChange: (value: string) => void;
  label?: string;
  suffix?: string;
  placeholder?: string;
}
export function SizeInput({ value, onChange, suffix, placeholder }: SizeInputProps) {
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
  )
}
