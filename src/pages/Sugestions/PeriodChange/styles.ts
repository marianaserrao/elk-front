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

interface CardImageContainerInterface {
  showImage?: boolean;
}

export const CardImageContainer = styled.div<CardImageContainerInterface>`
 height: 100px;
 width: 100px;

 margin: 0 10px;

 background-position:center ;
 background-size:contain ;
 background-repeat:no-repeat ;

 @media(max-width:1100px){
  display: ${props=> props.showImage ? 'block' : 'none'};
 }
`;

export const CardInfoContainer = styled.div`
  display:flex ;
  flex: 1;

  p{
    font-size: 14px;
    margin-left:20px ;

    @media(max-width:1100px){
      margin: 0;
    }

    b{
      color: ${({theme})=>theme.colors.primary}
    }
  }
`
