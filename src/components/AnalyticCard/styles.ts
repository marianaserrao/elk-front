import styled from 'styled-components';
import Card from '../Card'

export const Container = styled(Card)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 200px;
    height: 100px;
`;

export const CardMain = styled.div`
  display: flex;

  h3{
    font-size: 18px;
    font-weight: 600;
  }
`;

export const CardInfo = styled.div`
  display: flex;
  div{
    display: flex;
    align-items:center ;
  }
  span{
    color:${({theme})=>theme.colors.grey};
    font-size: 11px;
  }
`;