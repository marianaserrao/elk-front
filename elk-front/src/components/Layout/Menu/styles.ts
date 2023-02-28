import styled from 'styled-components';

import NameLogo from '../../../assets/name-logo-light.png'

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 250px;
  min-width: 150px;
  background-color: ${({theme})=>theme.colors.dark};
`;

export const Logo = styled.div`
  display: flex;
  justify-self: center;
  width: 70%;
  height: 40px;

  margin: 30px auto;
  background-image: url(${NameLogo});
  background-size: contain;
  background-repeat: no-repeat;
`;