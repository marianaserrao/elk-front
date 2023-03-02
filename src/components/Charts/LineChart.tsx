import React, {  HTMLAttributes } from 'react';
import { useTheme } from 'styled-components';
import { 
  LineChart as Chart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';

import {lineChart} from './utils'

import { Container } from './styles';

const tick = {
  margin: 8,
  size: 12
}

const LineChart: React.FC<HTMLAttributes<HTMLDivElement>> = ({...rest}) => {
  const {colors,fontFamily } = useTheme()
  const {lineColors,data}=lineChart
  return (
    <Container {...rest}>
      <ResponsiveContainer>
        <Chart
          data={data}
        >
          <CartesianGrid vertical={false} opacity={0.5}/>
          <XAxis 
            dataKey="date" 
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
            labelStyle={{fontSize:'14px'}}
            contentStyle={{borderRadius:'5px', padding: '8px'}}
            cursor={false}
          />
          <Legend 
            iconType='circle'
            iconSize={7}
            align='right'
            verticalAlign='top'
            wrapperStyle={{fontSize:'12px', color: colors.dark, paddingBottom: '20px'}}
            formatter={(value, entry, index) => <span style={{color:colors.dark, paddingRight:'10px'}}>{value}</span>}
          />
          {
            Object.keys(lineColors).map(line=>(
              <Line 
                key={line}
                type="monotone" 
                dataKey={line}
                activeDot={{r:4}}
                dot={false}
                animationDuration={1800}
                stroke={lineColors[line as keyof typeof lineColors]}
              />
            ))
          }
        </Chart>
      </ResponsiveContainer>
    </Container>
  );
}

export default LineChart;