interface PercentSliderProps {
  value: number | null;
  onChange: (percent: number) => void;
}

const PERCENT_OPTIONS = [25, 50, 75, 100];

/**
 * TODO: Реализовать компонент
 *
 * 4 кнопки: 25%, 50%, 75%, 100%
 * Выбранная кнопка подсвечена
 * При клике вызывается onChange с процентом
 *
 * CSS классы готовы: .percent-slider, .percent-btn, .percent-btn.active
 */
export function PercentSlider({ value, onChange }: PercentSliderProps) {
  return <div>TODO: PercentSlider</div>;
}
