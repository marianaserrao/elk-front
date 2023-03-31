import React from 'react';
import { LegendItem } from './interfaces';

import * as S from './styles';

const Legend: React.FC<{legend:LegendItem[]}> = ({legend}) => {
  return (
    <S.LegendContainer>
      {
        legend.map((entry, index) => (
          <S.LegendItemContainer key={index}>
            <span style={{backgroundColor: entry.color}}/>
            <li key={`item-${index}`}>{entry.value}</li>
          </S.LegendItemContainer>
        ))
      }
    </S.LegendContainer>
  );
}

export default Legend;