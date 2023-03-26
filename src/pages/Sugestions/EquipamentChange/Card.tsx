import React, {useMemo } from 'react';
import { useTheme } from 'styled-components';

import * as S from './styles';

import ChartHeader from './components/ChartHeader'
import { usageByCategory } from './dummyData';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { LegendItem } from './components/ChartHeader/interfaces';

const tick = {
  margin: 8,
  size: 12
}

const Card: React.FC = () => {
  const {fontFamily, colors} = useTheme()

  const lineLabels = useMemo(()=>{
    let labels = Object.keys(usageByCategory[0])
    // remove date from keys to get line labels
    labels.splice(labels.indexOf('date'), 1)        
    return labels
  },[])
  
  return (
    <S.CardContainer>
      <S.CardMain>
        <h3>Máquina de Lavar</h3>
        <S.CardInfoContainer>
          <span>Poupe até <b>$40 mensais</b> com a troca do equipamento!</span>
          <span>Payback a partir de <b>2 anos</b>!</span>
        </S.CardInfoContainer>
        <a href='www.google.com'>Ver mais recomandações</a>
      </S.CardMain>
      <S.CardChart>
        <ResponsiveContainer>
          <LineChart
            data={usageByCategory}
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
            />
            <Legend 
              verticalAlign='top'
              content={(legend)=>(        
                <ChartHeader 
                  title='Consumo' 
                  legend={legend.payload as LegendItem[]} 
                />
              )}
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
          </LineChart>
        </ResponsiveContainer>

      </S.CardChart>

    </S.CardContainer>
  );
}

export default Card;