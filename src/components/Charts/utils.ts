import { ChartEntry } from "./interfaces"
import theme from '../../styles/theme'

export const getLabels = ((chartData: ChartEntry[], xAxis: string)=>(
  Object.keys(chartData[0]).filter((label)=>(label!=xAxis))
))

export const getLabelsAndLegend=(chartData: ChartEntry[], xAxis: string)=>{
  let labels = getLabels(chartData, xAxis)
  let legend = labels.map((label, index)=>({
    value: label,
    color: theme.colors.chart[index]
  }))
  return [labels,legend]
}