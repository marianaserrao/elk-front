import styled from 'styled-components';

export const ChartContainer = styled.div`
  background-color: ${({theme})=>theme.colors.cardBackground};

  border-radius: ${({theme})=>theme.radius.default};
  padding: 15px 25px 20px 10px;

  box-shadow: ${({ theme }) => theme.shadows.default};
`;

export const Title = styled.p`
  font-size: 18px;
  font-weight: 600;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px 10px 10px 20px;
  margin-bottom: 30px;
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

export const PeriodSelectorContainer = styled.div`
  display: flex;
`;
