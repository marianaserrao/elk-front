import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import Select from '../../../components/Select';
import Card from './Card';

import { tariffChangeData } from './service';

import { CardListContainer } from './styles';

const PeriodChange: React.FC = () => {
  const {spacings} = useTheme();
  const [rankingPriority, setRankingPriority] = useState('')
  const options = ['Sustentáveis','Econômicas', 'Semelhantes ao meu perfil']
  return (
    <div>
      <Select
        style={{
          width: 'fit-content',
          position: 'absolute',
          top: spacings.large,
          right: '5%',
          margin: 0
        }}
        setFunction={setRankingPriority}
      > 
      {
        options.map((opt)=>(
          <option value={opt}>{opt}</option>
        ))
      }
      </Select>
      <CardListContainer>
        {
          tariffChangeData.map(({
            chartData,
            savings,
            suggestion
          }, index)=>(
            <Card
              key={index}
              savings={savings}
              chartData={chartData}
              suggestion={suggestion}
            />
          ))
        }
      </CardListContainer>
    </div>
  );
}

export default PeriodChange;