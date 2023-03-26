import styled from 'styled-components';

export const Title = styled.p`
  font-size: 13px;
  font-weight: 600;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-left: 12px;
  margin-bottom:20px ;
`;

export const LegendContainer = styled.ul`
  display: flex;
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
