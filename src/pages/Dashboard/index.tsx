import React from 'react';

import { tariffs } from '../../components/Chart/utils';

import AnalyticCard from '../../components/AnalyticCard';
import Chart from '../../components/Chart';
import PageTitle from '../../components/PageTitle';

import * as S from './styles';

const menu: React.FC = () => {
  return (
    <S.Container>
      <PageTitle title='Dashboard'/>
      <S.TopContainer>
        <S.AnalyticContainer>
          <AnalyticCard
            mainText='250 kWh'
            description='Energia Elétrica'
            percentage={-24}
            color='green'
          />
          <AnalyticCard
            mainText='1,5 ton CO_2'
            description='Toneladas de CO_2'
            percentage={35}
            color='red'
          />
        </S.AnalyticContainer>
      </S.TopContainer>
      <Chart 
        title='Uso por categoria' 
        type='line' 
        style={{width:'100%', height: 400}}
      />
      <Chart 
        title='Uso médio por horário do dia' 
        type='bar' 
        customLegend={Object.values(tariffs)} 
        style={{width:'100%', height: 400}}
      />
    </S.Container>
  );
}

export default menu;