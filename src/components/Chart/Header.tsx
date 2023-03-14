import React from 'react';

import * as S from './styles';

import { HeaderProps } from './interfaces';
import Select from '../Select';

const Header: React.FC<HeaderProps> = ({legend, title, setChartPeriod, chartPeriod, chartPeriodOptions}) => {
  return (
    <S.HeaderContainer>
      <div>
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
      </div>
      <S.PeriodSelectorContainer>
        <Select
          setFunction={setChartPeriod}          
          value={chartPeriod}
        >
          {chartPeriodOptions.map((option, index) => (
              <option key={index} value={option}>{option}</option>
          ))}
        </Select>
      </S.PeriodSelectorContainer>
    </S.HeaderContainer>
  );;
}

export default Header;