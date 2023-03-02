export type LegendItem = {
  value: string,
  color: string
}
export interface LegendProps{
  payload: LegendItem[],
  title: string
}

export interface ChartEntry{
  [key: string]: number|string,
}