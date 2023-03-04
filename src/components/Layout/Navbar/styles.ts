import styled from 'styled-components';
import { Link } from 'react-router-dom';

import NameLogo from '../../../assets/images/name-logo-light.png'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 250px;
  min-width: 150px;
  background-color: ${({theme})=>theme.colors.dark};
`;

export const Logo = styled.div`
  display: flex;
  justify-self: center;
  width: 80%;
  height: 40px;

  margin: 35px auto;

  background-image: url(${NameLogo});
  background-size: contain;
  background-repeat: no-repeat;
`;

export const Tab = styled(Link)`
display: flex;

text-decoration: none;
color: ${({theme})=>theme.colors.light};

padding: 14px 20px;
position:relative;

>div{
  display:flex;
  height: 100%;
  width: 100%;

  position: absolute;
  top:0;
  left:0;

  border-left: 2px solid white;
}

p{
  position: relative;
}

img{
  width: 25px;
  height: 25px;
  margin-right: 10px;
  position: relative;
}
`;