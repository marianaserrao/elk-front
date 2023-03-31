import React from 'react';

import * as S from './styles';

import { HeaderProps } from './interfaces';
import Legend from '../../../../components/Charts/Legend';

const Header: React.FC<HeaderProps> = ({legend, title}) => {
  return (
    <S.HeaderContainer>
        <S.Title>{title}</S.Title>
        <Legend legend={legend}/>
    </S.HeaderContainer>
  );;
}

export default Header;