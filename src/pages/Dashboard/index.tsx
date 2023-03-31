import React, { useMemo } from 'react';

import { mainAnalytics, tariffs, usageByTime, usageByCategory  } from './service';

import AnalyticCard from '../../components/AnalyticCard';

import * as S from './styles';
import Card from '../../components/Card';
import LineChart from '../../components/Charts/LineChart';
import BarChart from '../../components/Charts/BarChart';

const Dashboard: React.FC = () => {
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
        <Card        
          style={{height: '400px'}}
        >          
          <LineChart 
            title='Uso por categoria' 
            xAxis='date'
            data={usageByCategory}
          />
        </Card>
        <Card
            style={{height: '400px'}}
        >  
          <BarChart 
            title='Uso médio por horário do dia' 
            xAxis='hour'
            data={usageByTime}             
            />
        </Card>
      </S.ChartContainer>
    </S.Container>
  );
}

export default Dashboard;
