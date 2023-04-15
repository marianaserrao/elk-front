import styled from 'styled-components';
import Card from '../../../../components/Card'

export const CardContainer = styled(Card)`
    display: flex;
    justify-content: space-between;

    a{
      color:${({theme})=>theme.colors.grey};
      font-size: 12px;

      margin-top: 50px;
    }

    @media(max-width:600px){
      flex-direction: column;
    }
`;

export const CardMain = styled.div`
  display: flex;
  flex-direction:column ;
  width: 50%;

  @media(max-width:600px){
    width: 100%;
  }
`;

export const CardTitle = styled.div`
  display:flex ;
  align-items:center ;
  margin-bottom: 30px;

  div{
    height: 20px;
    width: 20px;

    margin: 0 10px;

    background-position:center ;
    background-size:contain ;
    background-repeat:no-repeat ;
  }
  h3{
    font-size: 16px;
    font-weight: 600;

  }
`;

export const CardInfoContainer = styled.div`
  display:flex ;
  flex-direction:column ;

  margin-top: 24px;

  span{
    font-size: 14px;

    b{
      color: ${({theme})=>theme.colors.primary}
    }
  }
`

export const CardChart = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  padding-top: 30px;
  height: 180px;

  select{
    display: none;
  }

  li{
    span{
      font-size:10px ;
      color:${({theme})=>theme.colors.dark} ;
    }
  }

  @media(max-width:600px){
    width: 100%;
  }
`;