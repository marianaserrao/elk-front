import styled from "styled-components";
import LogoImage from '../../assets/images/logo-primary.png'

export const Container = styled.div`
  display:flex;
  min-height: flex; 
  background-color:${({theme})=>theme.colors.background};
  //Desktop Navbar
  >div:first-child{
      @media(max-width: 800px) {
      display: none;
      max-width: 0;
    }
  }
`;

export const Header = styled.div`
  justify-content: space-between;
  display: flex;
`;

export const Logo = styled.div`
  display: flex;
  justify-self: center;
  width: 40px;
  height: 40px;

  background-image: url(${LogoImage});
  background-size: contain;
  background-repeat: no-repeat;
  display:none ;

  @media(max-width:800px){
    display: initial;
  }
`;

export const TitleContainer = styled.div`
 display: flex;
 align-items: center;

  @media(max-width: 800px){
    padding-bottom: ${({theme})=>theme.spacings.default};
    p{
      margin:0;
      padding:0 10px;
      color:${({theme})=>theme.colors.primary};
    }  
  }
`;

export const DrawerContainer = styled.div`
  button{
    border: none;
    background-color: transparent;
  }
  display: none;

  @media(max-width: 800px) {
    display: initial
  } 
`;