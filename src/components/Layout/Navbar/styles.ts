import styled from 'styled-components';
import { Link } from 'react-router-dom';

import NameLogo from '../../../assets/images/name-logo-light.png'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* height: 100%; */
  width: 220px;
  min-width: 150px;
  background-color: ${({theme})=>theme.colors.primary};
`;

export const Content = styled.div`
  width: inherit;
  position: fixed;

  height:100vh;
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
  font-size: 14px;
}

img{
  width: 20px;
  height: 20px;
  margin-right: 10px;
  position: relative;
}
`;
export const ToggleContainer = styled.button`
/* width:100% ; */
display: flex;
color: ${({theme})=>theme.colors.light};
background-color:transparent ;
border: none;

padding: 14px 20px;
position:relative;

>div{
  display:flex;
  height: 100%;
  align-items: center;

  position: absolute;
  right: -10px;
  top: 0;
}

p{
  position: relative;
  font-size: 14px;
}

img{
  width: 20px;
  height: 20px;
  margin-right: 10px;
  position: relative;
}
`;

export const LogoutButton = styled.button`
  display: flex;
  align-items: center;

  position:absolute;
  bottom: 0;

  background-color:transparent ;
  text-decoration:none ;
  border:none ;

  gap: 5px;

  color: ${({theme})=>theme.colors.light};
  font-size: 14px;;

  margin: 20px 10px;
`;