import React, { HTMLAttributes, useMemo, useState} from 'react';
import { Line, LineChart } from 'recharts';

import CustomHeader from './Header';
import GenericChart from './GenericChart'

import * as S from './styles'
import { ChartProps } from './interfaces';
import { useTheme } from 'styled-components';

const LineChartCard: React.FC<ChartProps> = ({
  title='', 
  data, 
  xAxis,
  yUnit='kW',
  initialPeriodIndex=1,
  showHeader=true,
  ...rest
}) => {
  const {colors} = useTheme()

  const periodOptions = useMemo(()=>(Object.keys(data)),[])
  const [period, setPeriod] = useState(periodOptions[initialPeriodIndex])

  const selectedData = useMemo(()=>(data[period as keyof typeof data]),[period])

  const labels = useMemo(()=>(Object.keys(selectedData[0]).filter((label)=>(label!=xAxis))),[selectedData])
  const legend = useMemo(()=>(
    labels.map((label, index)=>({
      value: label,
      color: colors.chart[index]
    }))
  ),[labels])

  return (
    <S.ChartContainer {...rest}>
      {
        showHeader &&
        <CustomHeader 
          title={title} 
          legend={legend} 
          chartPeriod={period} 
          chartPeriodOptions={periodOptions} 
          setChartPeriod={setPeriod}
        />
      }
      <GenericChart
        data={selectedData}
        xAxis={xAxis}
        yUnit={yUnit}
        ChartNode={LineChart}
      >
        {
          labels.map((label, index)=>(
            <Line 
              key={label}
              type="monotone" 
              dataKey={label}
              activeDot={{r:4}}
              dot={false}
              animationDuration={1800}
              stroke={legend[index].color}
              strokeWidth={2}
            />
          ))
        }
      </GenericChart>
    </S.ChartContainer>
  );
}

export default LineChartCard;