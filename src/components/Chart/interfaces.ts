export type LegendItem = {
  value: string,
  color: string
}
export interface HeaderProps{
  legend: LegendItem[],
  title: string,
  chartPeriodOptions: string[],
  chartPeriod: string,
  setChartPeriod: (period:string)=>void
}

export interface ChartEntry{
  [key: string]: number|string,
}