import { HTMLAttributes } from "react"

export type LegendItem = {
  value: string,
  color: string
}

export interface ChartEntry{
  [key: string]: number|string,
}

export interface ChartProps extends HTMLAttributes<HTMLDivElement>{
  title?: string,
  xAxis: string,
  yUnit?:string,
  data: Record<string,ChartEntry[]>,
  initialPeriodIndex?: number,
  showHeader?: boolean
}