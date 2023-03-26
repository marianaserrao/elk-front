import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme})=>theme.spacings.large};
`;

export const CardContainer = styled.div`
    display: flex;
    justify-content: space-between;

    height: 200px;

    background-color: ${({theme})=>theme.colors.cardBackground};
    box-shadow: ${({theme})=>theme.shadows.default};

    border-radius: ${({theme})=>theme.radius.default};
    padding: 15px;
`;

export const CardMain = styled.div`
  display: flex;
  flex-direction:column ;
  width: 50%;

  h3{
    font-size: 16px;
    font-weight: 600;

    margin-bottom: 30px;
  }

  div{
    display: flex;
    /* align-items:center ; */
  }
`;

export const CardImageContainer = styled.div`
 height: 100px;
 width: 100px;

 margin: 0 10px;

 background-position:center ;
 background-size:contain ;
 background-repeat:no-repeat ;
`;

export const CardInfoContainer = styled.div`
  display:flex ;
  flex: 1;

  p{
    font-size: 14px;
    margin-left:20px ;

    b{
      color: ${({theme})=>theme.colors.primary}
    }
  }
`

export const CardChart = styled.div`
  display: flex;
  width: 45%;
  height: 180px;
`;