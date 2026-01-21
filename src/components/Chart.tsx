import { useEffect, useRef } from 'react'

// Data is ready to use
// import { candlestickData, volumeData } from '@/data/candlesticks'

interface ChartProps {
  symbol?: string
}

/**
 * TODO: Реализовать компонент графика
 * 
 * Библиотека: lightweight-charts (уже установлена)
 * Документация: https://tradingview.github.io/lightweight-charts/
 * 
 * Требования:
 * 1. Создать chart с помощью createChart()
 * 2. Добавить candlestick series
 * 3. Загрузить данные из @/data/candlesticks
 * 4. Настроить тёмную тему (цвета в CSS переменных)
 * 5. Сделать chart responsive (resize при изменении окна)
 * 6. Cleanup при unmount
 * 
 * Пример базовой инициализации:
 * ```
 * import { createChart } from 'lightweight-charts'
 * 
 * const chart = createChart(container, { width, height })
 * const candlestickSeries = chart.addCandlestickSeries()
 * candlestickSeries.setData(data)
 * ```
 */
export function Chart({ symbol = 'BTC/USDC' }: ChartProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // TODO: Initialize chart here

    return () => {
      // TODO: Cleanup
    }
  }, [])

  return (
    <div className="chart-container">
      <div className="chart-header">
        <span className="chart-symbol">{symbol}</span>
      </div>
      <div className="chart-placeholder" ref={containerRef}>
        <span>TODO: Подключить lightweight-charts</span>
      </div>
    </div>
  )
}
