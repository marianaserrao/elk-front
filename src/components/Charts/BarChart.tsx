import React, { useCallback, useMemo, useState} from 'react';
import { Bar, BarChart, Cell } from 'recharts';
import { tariffs, usageByTime} from '../../pages/Dashboard/service';

import CustomHeader from './Header';
import GenericChart from './GenericChart'

import * as S from './styles'

import { ChartProps } from './interfaces';

const BarChartCard: React.FC<ChartProps> = ({
  title='', 
  data, 
  xAxis,
  yUnit='kW',
  initialPeriodIndex=1,
  showHeader=true,
  ...rest
}) => {

  const periodOptions = useMemo(()=>(Object.keys(data)),[])

  const [period, setPeriod] = useState(periodOptions[initialPeriodIndex])

  const selectedData = useMemo(()=>(data[period as keyof typeof data]),[period])

  //function to define bar color for each entry
  const timeDataColors = useMemo(()=>{
    let colors = {} as Record<string,string[]>
    Object.keys(data).forEach(period=>{
      colors[period]=selectedData.map((entry)=>(tariffs[entry.tariff as keyof typeof tariffs].color))
    })
    return colors
  },[period, selectedData])

  //function for custom tooltip label
  const formatTimeTooltipLabel = useCallback((label:string)=>{
    let hour = +(label.replace('h',''))
    return `${hour}h - ${hour<24 ? hour+1+'h' : '1h'}`
  },[])

  return (
    <S.ChartContainer {...rest}>
      {
        showHeader &&
        <CustomHeader 
          title={title}
          legend={Object.values(tariffs)} 
          chartPeriod={period} 
          chartPeriodOptions={periodOptions} 
          setChartPeriod={setPeriod}
        />
      }
      <GenericChart
        data={selectedData}
        xAxis={xAxis}
        yUnit={yUnit}
        ChartNode={BarChart}
        tooltip={{
          labelFormatter: formatTimeTooltipLabel,
          formatter: (value)=>[value,''],
          separator:'',
          offset:5
        }}
      >
        <Bar dataKey="amt" type="stepAfter" animationDuration={1800}>
          {selectedData.map((entry, index) => (
            <Cell  
              key={index} 
              fill={timeDataColors[period][index]}
              />
          ))}
        </Bar>
      </GenericChart>
    </S.ChartContainer>
  );
}

export default BarChartCard;