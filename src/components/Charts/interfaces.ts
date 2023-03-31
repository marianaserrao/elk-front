import { HTMLAttributes, ReactNode } from "react"
import { BarChart } from "recharts/types/chart/BarChart"
import { TooltipProps } from "recharts"
import { NameType, ValueType } from "recharts/types/component/DefaultTooltipContent"

export type LegendItem = {
  value: string,
  color: string
}

export interface ChartEntry{
  [key: string]: number|string,
}

export interface ChartProps extends HTMLAttributes<HTMLDivElement>{
  data: ChartEntry[],
  xAxis: string,
  yUnit?: string,
  colors?:string[],
}

export interface GenericChartProps extends ChartProps{
  ChartNode: typeof BarChart,  
  tooltip?: TooltipProps<ValueType,NameType>
}

export interface SelectableChartProps extends Omit<ChartProps, 'data'>{
  data: Record<string, ChartEntry[]>,
  title: string,
  legend?: LegendItem[]
  Chart: React.FC<ChartProps>,
  initialPeriodIndex?: number,
}