import React, { useState } from 'react';

import * as S from './styles';

import { LegendProps } from './interfaces';
import Select from '../Select';

const periodOptions = [
  'weekly',
  'montly',
  'yearly'
]

const Legend: React.FC<LegendProps> = ({payload, title}) => {
  const [period, setPeriod] = useState('montly')
  return (
    <S.HeaderContainer>
      <S.HeaderInfoContainer>
        <S.Title>{title}</S.Title>
        <S.LegendContainer>
          {
            payload.map((entry, index) => (
              <S.LegendItemContainer key={index}>
                <span style={{backgroundColor: entry.color}}/>
                <li key={`item-${index}`}>{entry.value}</li>
              </S.LegendItemContainer>
            ))
          }
        </S.LegendContainer>
      </S.HeaderInfoContainer>
      <S.PeriodSelectorContainer>
        <Select
          setFunction={setPeriod}
          value={period}
        >
          {periodOptions.map((option, index) => (
              <option key={index} value={option}>{option}</option>
          ))}
        </Select>
      </S.PeriodSelectorContainer>
    </S.HeaderContainer>
  );;
}

export default Legend;