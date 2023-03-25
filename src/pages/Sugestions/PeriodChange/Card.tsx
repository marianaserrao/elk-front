import React, { useMemo } from 'react';
import { useTheme } from 'styled-components';

import * as S from './styles';

import equipamentImage from '../../../assets/images/washing-machine.png';
import { tariffs, usageByTime } from './dummyData';
import { Bar, BarChart, CartesianGrid, Cell, Legend, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const tick = {
  margin: 8,
  size: 12
}

const PeriodChange: React.FC = () => {
  const {fontFamily} = useTheme()

  const dataColors = useMemo(()=>{
    let colors = {} as Record<string,string[]>
    Object.keys(usageByTime).forEach(period=>{
      colors[period]=usageByTime[period as keyof typeof usageByTime].map((entry)=>(tariffs[entry.tariff as keyof typeof tariffs].color))
    })
    return colors
  },[])
  
  return (
    <S.CardContainer>
      <S.CardMain>
        <h3>Refrigerador</h3>
        <div>
          <S.CardImageContainer style={{backgroundImage: `url(${equipamentImage})`}}/>
          <S.CardInfoContainer>
            <p>Você está utilizando o ar condicionador no horário de custo mais alto, das <b>16 ás 18 horas</b>. Tente utilizar no horário de menor custo, das <b>8 horas às 10 horas</b> e poupe até <b>$30 mensais</b>.</p>
          </S.CardInfoContainer>
        </div>
      </S.CardMain>
      <S.CardChart>
        <ResponsiveContainer>
          <BarChart
            data={usageByTime['Último mês']}
          >
            <CartesianGrid vertical={false} opacity={0.5}/>
            <XAxis 
              dataKey='hour' 
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
              <Bar dataKey="amt" type="stepAfter" animationDuration={1800}>
              {usageByTime['Último mês'].map((entry, index) => (
                <Cell  
                  key={index} 
                  fill={dataColors['Último mês'][index]||undefined}
                />
              ))}
              </Bar>
          </BarChart>
        </ResponsiveContainer>
      </S.CardChart>

    </S.CardContainer>
  );
}

export default PeriodChange;