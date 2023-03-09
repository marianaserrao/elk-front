import React from 'react';

import { mainAnalytics, tariffs, usageByTime, usageByCategory  } from './dummyData';

import AnalyticCard from '../../components/AnalyticCard';
import Chart from '../../components/Chart';
import PageTitle from '../../components/PageTitle';
import SlidingContainer from '../../components/AnimatedContainers/SlidingContainer';

import * as S from './styles';

const Dashboard: React.FC = () => {
  return (
    <SlidingContainer>
      <PageTitle title='Dashboard'/>
      <S.TopContainer>
        <S.AnalyticContainer>
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
        </S.AnalyticContainer>
      </S.TopContainer>
      <Chart 
        title='Uso por categoria' 
        xAxis='date'
        type='line' 
        data={usageByCategory.data}
        style={{width:'100%', height: 400}}
      />
      <Chart 
        title='Uso médio por horário do dia' 
        xAxis='hour'
        type='bar' 
        customLegend={Object.values(tariffs)}
        data={usageByTime.data} 
        style={{width:'100%', height: 400}}
        dataColors={usageByTime.data.map((entry)=>(tariffs[entry.tariff as keyof typeof tariffs].color))}
      />
    </SlidingContainer>
  );
}

export default Dashboard;
