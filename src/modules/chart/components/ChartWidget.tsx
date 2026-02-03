import { ChartContainer} from './ChartContainer.tsx';
import { candlestickData } from './../mock/candlesticks.ts';

interface ChartProps {
  symbol?: string;
}

export function ChartWidget({ symbol = 'BTC/USDC' }: ChartProps) {
  return (
    <div className="chart-container">
      <div className="chart-header">
        <span className="chart-symbol">{symbol}</span>
      </div>
      <ChartContainer data={candlestickData}></ChartContainer>
    </div>
  );
}
