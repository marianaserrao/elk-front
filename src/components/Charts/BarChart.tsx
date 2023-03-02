import React, {  HTMLAttributes, useCallback} from 'react';
import { useTheme } from 'styled-components';
import { 
  BarChart as Chart, 
  Bar, 
  Cell,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
} from 'recharts';

import {barChart, tariffs} from './utils'

import CustomizedLegend, {LegendProps as Payload} from './Legend';

import { Container } from './styles';

const tick = {
  margin: 8,
  size: 12
}

const LineChart: React.FC<HTMLAttributes<HTMLDivElement>> = ({...rest}) => {
  const {colors,fontFamily } = useTheme()
  const {data}=barChart

  const getTimeInterval = useCallback((hour:string)=>{
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
  },[])

  const getLegend = useCallback((props: any)=>{
    return <CustomizedLegend payload={props.payload as any}/>
  },[])

  return (
    <Container {...rest}>
      <ResponsiveContainer>
        <Chart
          data={data}
          barCategoryGap={2}
          barGap={0}
        >
          <CartesianGrid vertical={false} opacity={0.5}/>
          <XAxis 
            dataKey="hour" 
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
            labelFormatter={getTimeInterval}
            formatter={(value, name, props)=>[value,'']}
            separator=''
            offset={5}
          />
          <Legend 
            iconType='circle'
            iconSize={8}
            align='right'
            payload={Object.keys(tariffs).map(t=>({
              ...tariffs[t  as keyof typeof tariffs]
            }))}
            verticalAlign='top'
            wrapperStyle={{fontSize:'12px', color: colors.dark, paddingBottom: '20px'}}
            formatter={(value, entry, index) => <span style={{color:colors.dark, paddingRight:'10px'}}>{value}</span>}
            // content={getLegend} 
          />
          <Bar dataKey="amt" type="stepAfter" animationDuration={1800}>
            {data.map((entry, index) => (
              <Cell  key={index} fill={tariffs[entry.tariff as keyof typeof tariffs].color} />
            ))}
          </Bar>
        </Chart>
      </ResponsiveContainer>
    </Container>
  );
}

export default LineChart;