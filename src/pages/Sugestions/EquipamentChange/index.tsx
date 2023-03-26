import React from 'react';
import Card from './Card';

import { equipamentChangeData } from './service';

import { Container } from './styles';

const PeriodChange: React.FC = () => {
  return (
    <Container>
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
    </Container>
  );
}

export default PeriodChange;