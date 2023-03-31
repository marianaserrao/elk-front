import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme})=>theme.spacings.large};
`;

export const CardMain = styled.div`
  display: flex;
  margin-top: -15px;
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
