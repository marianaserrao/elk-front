import React from 'react';
import Card from './Card';
import { periodChangeSuggestions } from './service';
import { Container } from './styles';

const PeriodChange: React.FC = () => {
  return (
    <Container>
      { periodChangeSuggestions.map(({
          chartData,
          currentInterval,
          savings,
          suggestedInterval,
          equipament
        }, index)=>(
          <Card
            key = {index}
            chartData={chartData}
            currentInterval={currentInterval}
            savings={savings}
            suggestedInterval={suggestedInterval}
            equipament={equipament}
          />
      ))}
    </Container>
  )
}

export default PeriodChange;