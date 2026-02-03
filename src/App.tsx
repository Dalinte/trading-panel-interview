import { ChartWidget } from '@/modules/chart';
import { TradingPanel } from './modules/trading/components/TradingPanel.tsx';

function App() {
  return (
    <div className="app">
      <div className="main-content">
        <ChartWidget symbol="BTC/USDC" />
      </div>
      <aside className="sidebar">
        <TradingPanel />
      </aside>
    </div>
  );
}

export default App;
