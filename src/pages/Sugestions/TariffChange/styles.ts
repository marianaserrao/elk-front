import styled from 'styled-components';

export const SelectContainer = styled.div`
  position: absolute;
  top: ${({theme})=>theme.spacings.medium};
  right: 5%;

  label{
    font-size:10px;
    color: ${({theme})=>theme.colors.dark};
    font-weight: 600;
  }
`;

export const CardListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme})=>theme.spacings.large};
`;

export const CardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    

    background-color: ${({theme})=>theme.colors.cardBackground};
    box-shadow: ${({theme})=>theme.shadows.default};

    border-radius: ${({theme})=>theme.radius.default};
    padding: 15px;

    a{
      color:${({theme})=>theme.colors.grey};
      font-size: 12px;

      margin-top: 50px;
    }
`;

export const CardMain = styled.div`
  display: flex;
  flex-direction:column ;
  width: 50%;

  div{
    display: flex;
    /* align-items:center ; */
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

  span{
    font-size: 14px;

    b{
      color: ${({theme})=>theme.colors.primary}
    }
  }
`

export const CardChart = styled.div`
  display: flex;
  width: 45%;
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
`;