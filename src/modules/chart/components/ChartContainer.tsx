import { createChart, ColorType, CandlestickSeries } from 'lightweight-charts';
import { useEffect, useRef } from 'react';
import { Candle } from '../types.ts';

interface ChartContainerProps {
  data: Candle[];
  colors?: {
    backgroundColor?: string;
    lineColor?: string;
    textColor?: string;
  };
}

export const ChartContainer = (props: ChartContainerProps) => {
  const {
    data,
    colors: { backgroundColor = '#1e2329', lineColor = '#2b3139', textColor = 'white' } = {},
  } = props;

  const chartContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (!chartContainerRef.current) return;
      chart.applyOptions({ width: chartContainerRef.current.clientWidth });
    };

    if (!chartContainerRef.current) return;

    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { type: ColorType.Solid, color: backgroundColor },
        textColor,
      },
      width: chartContainerRef.current.clientWidth,
      height: 600,
    });
    chart.timeScale().fitContent();

    const newSeries = chart.addSeries(CandlestickSeries);
    newSeries.setData(data);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);

      chart.remove();
    };
  }, [data, backgroundColor, lineColor, textColor]);

  return <div ref={chartContainerRef} />;
};
