import React, { useMemo } from 'react';
import { useTheme } from 'styled-components';

import * as S from './styles';

import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import ChartHeader from '../EquipamentChange/components/ChartHeader';
import { LegendItem } from '../EquipamentChange/components/ChartHeader/interfaces';

const tick = {
  margin: 8,
  size: 12
}

interface Suggestion{
  name: string,
  logo: string,
  url: string,
  description: string
}

interface CardProps{
  savings: number,
  suggestion: Suggestion
  chartData: Record<string,string|number>[]
}

const Card: React.FC<CardProps> = ({
  savings,
  chartData,
  suggestion
}) => {
  const {fontFamily, colors} = useTheme()

  const lineLabels = useMemo(()=>{
    let labels = Object.keys(chartData[0])
    // remove date from keys to get line labels
    labels.splice(labels.indexOf('date'), 1)        
    return labels
  },[])
  
  return (
    <S.CardContainer>
      <S.CardMain>
        <S.CardTitle>  
          <div style={{backgroundImage: `url(${suggestion.logo})`}}/>
          <h3>{suggestion.name}</h3>
        </S.CardTitle>
        <S.CardInfoContainer>
          <span>Poupe até <b>{savings+' \u20AC'} mensais</b> com a troca do tarifário!</span>
          <span><b>{suggestion.description}</b></span>
        </S.CardInfoContainer>
        <a href='www.google.com'>Ver tarifa</a>
      </S.CardMain>
      <S.CardChart>
      <ResponsiveContainer>
        <LineChart
          data={chartData}
        >
          <CartesianGrid vertical={false} opacity={0.5}/>
          <XAxis 
            dataKey={'date'} 
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
            tickFormatter={(label)=>`${label}\u20AC`}
          />
          {
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
          <Legend 
            verticalAlign='top'
            content={(legend)=>(        
              <ChartHeader 
                title='Custo mensal' 
                legend={legend.payload as LegendItem[]} 
              />
            )}
          />
        </LineChart>
      </ResponsiveContainer>

      </S.CardChart>

    </S.CardContainer>
  );
}

export default Card;