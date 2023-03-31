import React, { HTMLAttributes} from 'react';
import { useTheme } from 'styled-components';

import { 
  ChartEntry
} from './interfaces';

import { 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  TooltipProps,
  BarChart,
} from 'recharts';

import { ChartContainer } from './styles';
import { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent';

const tick = {
  margin: 8,
  size: 12
}

interface ChartProps extends HTMLAttributes<HTMLDivElement>{
  xAxis: string,
  yUnit?: string,
  data: ChartEntry[],
  ChartNode: typeof BarChart,
  tooltip?: TooltipProps<ValueType,NameType>
}

const Chart: React.FC<ChartProps> = ({
  ChartNode,
  xAxis,
  yUnit = 'kW',
  data,
  tooltip={
    labelFormatter: undefined,
    offset: 10
  },
  children,
  ...rest
}) => {
  const {fontFamily } = useTheme()

  return (
    <ChartContainer {...rest}>
      <ResponsiveContainer>
        <ChartNode
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
            tickFormatter={(label)=>label+yUnit}
          />
          <Tooltip 
            itemStyle={{padding:'2px 0', fontFamily:fontFamily.default, fontSize:'12px'}}
            labelStyle={{fontSize:'12px'}}
            contentStyle={{borderRadius:'5px', padding: '8px'}}
            cursor={false}
            labelFormatter={tooltip.labelFormatter}
            formatter={tooltip?.formatter}
            separator={tooltip?.separator}
            offset={tooltip.offset}
          />
          {children}
        </ChartNode>
      </ResponsiveContainer>
    </ChartContainer>
  );
}

export default Chart;