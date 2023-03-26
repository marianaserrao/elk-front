import React, { useMemo } from 'react';

import { mainAnalytics, tariffs, usageByTime, usageByCategory  } from './dummyData';

import AnalyticCard from '../../components/AnalyticCard';
import Chart from '../../components/Chart';

import * as S from './styles';

const Dashboard: React.FC = () => {
  const dataColors = useMemo(()=>{
    let colors = {} as Record<string,string[]>
    Object.keys(usageByTime).forEach(period=>{
      colors[period]=usageByTime[period as keyof typeof usageByTime].map((entry)=>(tariffs[entry.tariff as keyof typeof tariffs].color))
    })
    return colors
  },[])

  return (
    <S.Container>
      <S.AnalyticsContainer>
          {
            mainAnalytics.map((item, index)=>(
              <AnalyticCard 
              key={index}
              mainText={item.value}
              description={item.description}
              percentage={item.variation}
              realtime={item.realtime}
              />
            ))
          }
      </S.AnalyticsContainer>
      <S.ChartContainer>
        <Chart 
          title='Uso por categoria' 
          xAxis='date'
          type='line' 
          data={usageByCategory}
          style={{width:'100%', height: 400}}
        />
        <Chart 
          title='Uso médio por horário do dia' 
          xAxis='hour'
          type='bar' 
          customLegend={Object.values(tariffs)}
          data={usageByTime} 
          style={{width:'100%', height: 400}}
          dataColors={dataColors}
          />
        </S.ChartContainer>
    </S.Container>
  );
}

export default Dashboard;
