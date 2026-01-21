import { Chart } from './components/Chart'
import { TradingPanel } from './components/TradingPanel'

function App() {
  return (
    <div className="app">
      <div className="main-content">
        <Chart symbol="BTC/USDC" />
      </div>
      <aside className="sidebar">
        <TradingPanel />
      </aside>
    </div>
  )
}

export default App
