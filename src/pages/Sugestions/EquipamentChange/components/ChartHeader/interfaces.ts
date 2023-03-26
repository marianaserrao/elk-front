export type LegendItem = {
  value: string,
  color: string
}
export interface HeaderProps{
  legend: LegendItem[],
  title: string,
}