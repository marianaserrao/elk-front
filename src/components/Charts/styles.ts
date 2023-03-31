import styled from 'styled-components';

export const ChartContainer = styled.div`
  display: flex;
  flex-direction:column ;

  height: 100%;
  width: 100%;
`;

export const LegendContainer = styled.ul`
  display: flex;
  margin: 10px 0;
  gap: 10px;
`;

export const LegendItemContainer = styled.div`
  display: flex;
  align-items: center;

  span{
    height: 8px;
    width: 8px;
    border-radius: 50%;
    display: flex;
    margin-right: 5px;
  }
  li{
    display: flex;
    font-size: 12px;
  }
`;

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px 10px 10px 20px;
  margin-bottom: 20px;
`;

export const Title = styled.p`
  font-size: 18px;
  font-weight: 600;
`;


export const PeriodSelectorContainer = styled.div`
  display: flex;
`;
