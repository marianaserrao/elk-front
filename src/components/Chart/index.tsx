import React, {  HTMLAttributes, ReactNode, useCallback, useEffect, useState} from 'react';
import { useTheme } from 'styled-components';
import { Props } from 'recharts/types/component/DefaultLegendContent';
import {CategoricalChartProps as RechartProps} from 'recharts/types/chart/generateCategoricalChart'

import { 
  LegendItem,
  ChartEntry
} from './interfaces';

import { 
  LineChart,
  BarChart, 
  Line, 
  Bar,
  Cell,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';

import CustomHeader from './Header';
import { ChartContainer } from './styles';

interface ChartProps extends HTMLAttributes<HTMLDivElement>{
  type:"bar"|"line",
  xAxis: string,
  title:string,
  customLegend?: LegendItem[],
  data: ChartEntry[],
  dataColors?: string[]
}

interface ChartNodeProps extends RechartProps{
  type:"bar"|"line",
}

const tick = {
  margin: 8,
  size: 12
}
// parent chart node depending on the chart type defined
const ChartNode: React.FC<ChartNodeProps>=(({type, ...rest})=>(
  type==='bar'
  ?<BarChart {...rest}/>
  :<LineChart {...rest}/>
))

const Chart: React.FC<ChartProps> = ({
  type='line', 
  xAxis,
  title, 
  customLegend=false, 
  data,
  dataColors=[],
  ...rest
}) => {
  const {fontFamily, colors } = useTheme()
  const [lineLabels, setLineLabels] = useState([] as string[])

  //function for custom chart legend param
  const getHeaderFromLegend = useCallback((props: Props):ReactNode=>{
    const payload= customLegend || props.payload
    return <CustomHeader title={title} payload={payload as LegendItem[]}/>
  },[title, customLegend])

  //function for custom tooltip label
  const formatTooltipLabel = useCallback((label:string)=>{
    const getTimeInterval=(hour: string)=>{
      let interval=''
      switch(true){
        case(+hour<12):
          interval = `${hour}a.m. - ${+hour+1}a.m.`;
          break;
        case(+hour===12):
          interval = `${hour}a.m. - 1p.m.`;
          break;
        case(+hour<24):
          interval = `${hour}p.m. - ${+hour+1}p.m.`;
          break;
        case(+hour===24):
          interval = `${12}p.m. - 1a.m.`;
          break;
        }
      return interval
    }
    return type==='bar'? getTimeInterval(label): label
  },[type])

  //function for custom tooltip value
  const formatTooltipValue = useCallback((value:any, name:any, props:any)=>{
    return type==='bar'? [value, '']: [value, name]
  },[type])

  useEffect(()=>{
    // update after backend integration
    if(type==='line'){
      // get keys of a entry
      let labels = Object.keys(data[0])
      // remove date from keys to get line labels
      labels.splice(labels.indexOf('date'), 1)        
      setLineLabels(labels)
    }
  },[type, data])

  return (
    <ChartContainer {...rest}>
      <ResponsiveContainer>
        <ChartNode
          type={type}
          data={data}
        >
          <CartesianGrid vertical={false} opacity={0.5}/>
          <XAxis 
            dataKey={xAxis} 
            axisLine={false} 
            tickLine={false} 
            tick={{fontFamily:fontFamily.default, 
            fontSize:`${tick.size}px`}} 
            tickMargin={tick.margin} 
          />
          <YAxis 
            axisLine={false} 
            tickLine={false} 
            tick={{fontFamily:fontFamily.default, fontSize:`${tick.size}px`}} 
            tickMargin={tick.margin}
          />
          <Tooltip 
            itemStyle={{padding:'2px 0', fontFamily:fontFamily.default, fontSize:'12px'}}
            labelStyle={{fontSize:'12px'}}
            contentStyle={{borderRadius:'5px', padding: '8px'}}
            cursor={false}
            labelFormatter={formatTooltipLabel}
            formatter={formatTooltipValue}
            separator={type==='bar'?'':' : '}
            offset={type==='bar'?5:10}
          />
          <Legend 
            verticalAlign='top'
            content={getHeaderFromLegend}
          />
          {
            type === "bar"
            ?
            <Bar dataKey="amt" type="stepAfter" animationDuration={1800}>
            {data.map((entry, index) => (
              <Cell  key={index} fill={dataColors[index] ||'undefined'} />
            ))}
            </Bar>
            :
            lineLabels.map((label, index)=>(
              <Line 
                key={label}
                type="monotone" 
                dataKey={label}
                activeDot={{r:4}}
                dot={false}
                animationDuration={1800}
                stroke={colors.chart[index]}
                strokeWidth={2}
              />
            ))
          }
        </ChartNode>
      </ResponsiveContainer>
    </ChartContainer>
  );
}

export default Chart;