import React, { useMemo } from 'react';

import { mainAnalytics, tariffs, usageByTime, usageByCategory  } from './service';

import AnalyticCard from '../../components/AnalyticCard';

import * as S from './styles';
import Card from '../../components/Card';
import SelectableChart from '../../components/Charts/SelectableChart';
import LineChart from '../../components/Charts/LineChart';
import HourlyUsageChart from '../../components/Charts/HourlyUsageChart';

const Dashboard: React.FC = () => {
  return (
    <S.Container id='dashboardd'>
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
          <SelectableChart 
            title='Uso por categoria' 
            xAxis='date'
            data={usageByCategory}
            Chart={LineChart}
          />
        </Card>
        <Card
            style={{height: '400px'}}
        >  
          <SelectableChart 
            title='Uso médio por horário do dia' 
            xAxis='hour'
            data={usageByTime} 
            Chart={HourlyUsageChart}
            legend={Object.values(tariffs)}       
            />
        </Card>
      </S.ChartContainer>
    </S.Container>
  );
}

export default Dashboard;
