import React from 'react';

import * as S from './styles';

import { HeaderProps } from './interfaces';

const Header: React.FC<HeaderProps> = ({legend, title}) => {
  return (
    <S.HeaderContainer>
        <S.Title>{title}</S.Title>
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
    </S.HeaderContainer>
  );;
}

export default Header;