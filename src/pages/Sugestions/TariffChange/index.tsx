import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import Select from '../../../components/Select';
import Card from './Card';

import { tariffChangeData } from './service';

import { CardListContainer, SelectContainer } from './styles';

const PeriodChange: React.FC = () => {
  const {spacings} = useTheme();
  const [rankingPriority, setRankingPriority] = useState('')
  const options = ['Sustentáveis','Econômicas', 'Semelhantes ao meu perfil']

  return (
    <div>
      <SelectContainer>
        <Select
          style={{
            width: 'fit-content',
            margin: 0
          }}
          labelText='Priorizo Sugestões:'
          setFunction={setRankingPriority}
        > 
        {
          options.map((opt)=>(
            <option value={opt}>{opt}</option>
          ))
        }
        </Select>
      </SelectContainer>
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