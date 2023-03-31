import React from 'react';

import * as S from './styles';

import Select from '../Select';
import Legend from './Legend';
import { LegendItem } from './interfaces';

export interface HeaderProps{
  legend: LegendItem[],
  title: string,
  chartPeriodOptions: string[],
  chartPeriod: string,
  setChartPeriod: (period:string)=>void
}

const Header: React.FC<HeaderProps> = ({legend, title, setChartPeriod, chartPeriod, chartPeriodOptions}) => {
  return (
    <S.HeaderContainer>
      <div>
        <S.Title>{title}</S.Title>
        <Legend legend={legend}/>
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