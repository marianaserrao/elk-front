import styled from "styled-components";

export const Container = styled.div`
  img{
    width: 80px;
    position: absolute;
    top: -40px;
    right: -30px;
    @media(max-width:450px){
      right: 0;
      top: -45px;
    }
  }
  h2{
    font-size: 16px;
    font-weight: 600;
  }  
`;