import { createChart, ColorType, CandlestickSeries } from 'lightweight-charts';
import { useEffect, useRef } from 'react';
import { Candle } from '../types.ts';

const getCSSVariable = (variableName: string): string => {
  return getComputedStyle(document.documentElement).getPropertyValue(variableName).trim() || '';
};

interface ChartContainerProps {
  data: Candle[];
}

export const ChartContainer = (props: ChartContainerProps) => {
  const { data } = props;

  const chartContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!chartContainerRef.current) return;

    const backgroundColor = getCSSVariable('--bg-secondary');
    const textColor = 'white';

    const handleResize = () => {
      if (!chartContainerRef.current) return;
      console.log( chartContainerRef.current);
      chart.applyOptions({
        width: chartContainerRef.current.clientWidth,
      });
    };

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
  }, [data]);

  return <div className={'chart-placeholder'} ref={chartContainerRef} />;
};
