import React from 'react';

import { 
  HeaderContainer,
  LegendContainer, 
  LegendItemContainer, 
  Title 
} from './styles';

import { LegendProps } from './interfaces';

const Legend: React.FC<LegendProps> = ({payload, title}) => {
  return (
    <HeaderContainer>
      <Title>{title}</Title>
      <LegendContainer>
        {
          payload.map((entry, index) => (
            <LegendItemContainer key={index}>
              <span style={{backgroundColor: entry.color}}/>
              <li key={`item-${index}`}>{entry.value}</li>
            </LegendItemContainer>
          ))
        }
      </LegendContainer>
    </HeaderContainer>
  );;
}

export default Legend;