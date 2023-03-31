import React, { useCallback, useMemo} from 'react';
import { Bar, BarChart, Cell } from 'recharts';
import { tariffs} from '../../pages/Dashboard/service';

import GenericChart from './GenericChart'

import * as S from './styles'

import { ChartProps } from './interfaces';

const BarChartCard: React.FC<ChartProps> = ({
  data, 
  xAxis,
  yUnit='kW',
  colors,
  ...rest
}) => {

  //function to define bar color for each entry
  const hourlyColors = useMemo(()=>{
    let colors=data.map((entry)=>(tariffs[entry.tariff as keyof typeof tariffs].color))
    return colors
  },[data])

  //function for custom tooltip label
  const formatTimeTooltipLabel = useCallback((label:string)=>{
    let hour = +(label.replace('h',''))
    return `${hour}h - ${hour<24 ? hour+1+'h' : '1h'}`
  },[])

  return (
    <S.ChartContainer {...rest}>
      <GenericChart
        data={data}
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
          {data.map((entry, index) => (
            <Cell  
              key={index} 
              fill={hourlyColors[index]}
              />
          ))}
        </Bar>
      </GenericChart>
    </S.ChartContainer>
  );
}

export default BarChartCard;