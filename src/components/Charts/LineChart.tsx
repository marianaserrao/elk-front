import React, { useMemo} from 'react';
import { Line, LineChart as LineRechart } from 'recharts';

import GenericChart from './GenericChart'

import * as S from './styles'
import { ChartProps, LegendItem } from './interfaces';
import { getLabelsAndLegend } from './utils';

const LineChart: React.FC<ChartProps> = ({
  data, 
  xAxis,
  yUnit='kW',
  ...rest
}) => {
  const [labels, legend] = useMemo(()=>(getLabelsAndLegend(data,xAxis)), [data,xAxis]) as [string[], LegendItem[]]

  return (
    <S.ChartContainer {...rest}>
      <GenericChart
        data={data}
        xAxis={xAxis}
        yUnit={yUnit}
        ChartNode={LineRechart}
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

export default LineChart;