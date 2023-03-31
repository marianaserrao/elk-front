import React from 'react';

import { periodChangeSuggestions, tariffs } from './service';
import * as S from './styles';
import SuggestionCard from '../components/SuggestionCard';
import HourlyUsageChart from '../../../components/Charts/HourlyUsageChart';

const PeriodChange: React.FC = () => {

  return (
    <S.Container>
      { periodChangeSuggestions.map(({
          chartData,
          currentInterval,
          savings,
          suggestedInterval,
          equipament
      }, index)=>(
        <SuggestionCard
          title = {`${equipament.name} - ${equipament.id}`}
          chart = {
            <HourlyUsageChart 
              data={chartData} 
              xAxis='hour'
              colors={chartData.map((entry)=>(tariffs[entry.tariff as keyof typeof tariffs].color))}
            /> 
          }
        >
          <S.CardMain>
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
          </S.CardMain>
        </SuggestionCard>
      ))}
    </S.Container>
  )
}

export default PeriodChange;