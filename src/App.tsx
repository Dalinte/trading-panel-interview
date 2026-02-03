import { ChartWidget } from '@/modules/chart';
import { TradingPanel } from '@/modules/trading';
import { Toaster } from 'sonner'

function App() {
  return (
    <div>
      <Toaster richColors position="top-right"  />
      <div className="app">
        <div className="main-content">
          <ChartWidget symbol="BTC/USDC" />
        </div>
        <aside className="sidebar">
          <TradingPanel />
        </aside>
      </div>
    </div>

  );
}

export default App;
