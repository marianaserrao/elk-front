import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import Select from '../../../components/Select';
import Card from './Card';

import { tariffChangeData } from './service';

import { Container } from './styles';

const PeriodChange: React.FC = () => {
  const {spacings} = useTheme();
  const [rankingPriority, setRankingPriority] = useState('')
  const options = ['Econômicas','Sustentáveis','Semelhantes ao meu perfil']
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
      <Container>
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
      </Container>
    </div>
  );
}

export default PeriodChange;