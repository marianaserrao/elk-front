import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import Select from '../../../components/Select';
import Card from './Card';

import { equipamentChangeData } from './service';

import { CardListContainer, SelectContainer } from './styles';

const PeriodChange: React.FC = () => {
  const {spacings} = useTheme();
  const [rankingPriority, setRankingPriority] = useState('')
  const options = ['Sustentáveis', 'Econômicas', 'Semelhantes ao meu perfil']
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
          equipamentChangeData.map(({
            chartData,
            equipament,
            payback,
            savings
          })=>(
            <Card
              chartData={chartData}
              equipament={equipament}
              payback={payback}
              savings={savings}
            />
          ))
        }
      </CardListContainer>
    </div>
  );
}

export default PeriodChange;