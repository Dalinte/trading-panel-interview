interface PercentSliderProps {
  value: number | null;
  onChange: (percent: number) => void;
}

const PERCENT_OPTIONS = [25, 50, 75, 100];

export function PercentSlider({ value, onChange }: PercentSliderProps) {
  return (
    <div className={'percent-slider'}>
      {PERCENT_OPTIONS.map(percent => (
        <button
          key={percent}
          className={`percent-btn ${value === percent && 'active'}`}
          onClick={() => onChange(percent)}
        >
          {percent}%
        </button>
      ))}
    </div>
  );
}
