import React, { useMemo } from 'react';
import { useTheme } from 'styled-components';

import * as S from './styles';

import { tariffs } from './service';
import { Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const tick = {
  margin: 8,
  size: 12
}

type Equipament= {
  name: string,
  id: string,
  image: string
}

interface CardProps { 
  currentInterval: number[],
  suggestedInterval: number[],
  savings: number,
  chartData: Record<string,string|number>[],
  equipament: Equipament
}

const PeriodChange: React.FC<CardProps> = ({
  currentInterval,
  suggestedInterval,
  savings,
  equipament,
  chartData
}) => {
  const {fontFamily} = useTheme()

  const dataColors = useMemo(()=>{
    let colors=chartData.map((entry)=>(tariffs[entry.tariff as keyof typeof tariffs].color))
    return colors
  },[])
  
  return (
    <S.CardContainer>
      <S.CardMain>
        <h3>{`${equipament.name} - ${equipament.id}`}</h3>
        <div>
          <S.CardImageContainer style={{backgroundImage: `url(${equipament.image})`}}/>
          <S.CardInfoContainer>
            <p>Você está utilizando o ar condicionador no horário de custo mais alto, das 
              <b> {currentInterval[0]} ás {currentInterval[1]} horas </b>. 
              Tente utilizar no horário de menor custo, das 
              <b> {suggestedInterval[0]} horas às {suggestedInterval[1]} horas </b> 
              e poupe até 
              <b> {savings + '\u20AC'} mensais</b>.
            </p>
          </S.CardInfoContainer>
        </div>
      </S.CardMain>
      <S.CardChart>
        <ResponsiveContainer>
          <BarChart
            data={chartData}
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
              tickFormatter={(label)=>`${label}kW`}
            />          
              <Bar dataKey="amt" type="stepAfter" animationDuration={1800}>
              {chartData.map((entry, index) => (
                <Cell  
                  key={index} 
                  fill={dataColors[index]}
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