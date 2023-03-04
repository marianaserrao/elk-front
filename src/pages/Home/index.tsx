import React, { useCallback } from 'react';
import { NavbarEnd, NavBarHome, Button, LogoDefault, Container, Description, Row, ImageDisplay } from './styles';
import { HBox, VBox } from '../../styles/spacing';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from 'styled-components';
import { useAuth } from '../../hooks/auth';

const Home: React.FC = () => {
  const { colors } = useTheme();
  const { login } = useAuth();

  const handleLogin = useCallback((event:any)=>{
    event.preventDefault();
    login()
  },[login])

  return <Container><NavBarHome>
    <p><b>About Us</b></p>
    <p>Our Products</p>
    <p>Blog</p>
    <p>Contact Us</p>
    <NavbarEnd>
      <a onClick={handleLogin}><p>Log In</p></a>
      <Button background={colors.green}>Sign Up</Button>
    </NavbarEnd>
  </NavBarHome>
  <LogoDefault />
  <Description>
    <p>Make the smart choice for sustainability with Elk Sockets. Our smart sockets <b>can increase your business's energy efficiency by up to 30% and reduce CO2 emissions by up to 20%.</b></p>
    <br/>
    <p>By optimizing your electrical demands, Elk Sockets help you save money on your energy bills and do your part for the environment.</p>
  </Description>

  <VBox /><VBox />
  
  <Row>
    <Button color={colors.primary} border={`${colors.primary} 4px solid`}>Our products</Button>
    <HBox />
    <Button background={colors.primary}>Contact us!</Button>
  </Row>
  <ImageDisplay>
    <img src={require('../../assets/images/socket.png')} />
  </ImageDisplay>
  </Container>;
}

export default Home;