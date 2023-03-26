import styled from 'styled-components';

export const Container = styled.div`
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

  h3{
    font-size: 16px;
    font-weight: 600;

  }
`;

export const CardInfoContainer = styled.div`
  display:flex ;
  flex-direction:column ;

  margin-top: 30px;

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
`;