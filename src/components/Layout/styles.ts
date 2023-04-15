import styled from "styled-components";

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