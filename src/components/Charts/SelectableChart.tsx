import React, { useMemo, useState} from 'react';

import CustomHeader from './Header';

import * as S from './styles'
import { ChartEntry, LegendItem, SelectableChartProps } from './interfaces';
import { getLabelsAndLegend } from './utils';

const LineChartCard: React.FC<SelectableChartProps> = ({
  title='', 
  data, 
  xAxis,
  yUnit='kW',
  Chart,
  initialPeriodIndex=1,
  legend,
  ...rest
}) => {
  
  const periodOptions = useMemo(()=>(Object.keys(data)),[])
  const [period, setPeriod] = useState(periodOptions[initialPeriodIndex])
  
  const selectedData = useMemo(()=>(data[period as keyof typeof data]),[period])
  const  [label, defaultLegend] = useMemo(()=>(
    getLabelsAndLegend(selectedData,xAxis)
  ),[data, xAxis]) as [string[], LegendItem[]]

  return (
    <S.ChartContainer {...rest}>
      <CustomHeader 
        title={title} 
        legend={legend||defaultLegend} 
        chartPeriod={period} 
        chartPeriodOptions={periodOptions} 
        setChartPeriod={setPeriod}
      />
      <Chart
        data={selectedData as any as ChartEntry[]}
        xAxis={xAxis}
        yUnit={yUnit}
      />
    </S.ChartContainer>
  );
}

export default LineChartCard;