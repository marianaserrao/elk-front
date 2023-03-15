import React, { useCallback, useMemo } from 'react';
import { NavbarEnd, NavBarHome, Button, LogoDefault, Container, Description, Row, ImageDisplay } from './styles';
import { HBox, VBox } from '../../styles/spacing';
import { useTheme } from 'styled-components';
import { useAuth } from '../../hooks/auth';

const disloc = 100

const Home: React.FC = () => {
  const { colors, animations } = useTheme();
  const { login } = useAuth();

  const animation = useMemo(()=>({
    xLeft: -disloc,
    xRight: disloc,
    duration: 1,
    opacity: 0
  }),[])

  const handleLogin = useCallback((event:any)=>{
    event.preventDefault();
    login()
  },[login])

  return (
    <Container>
      <NavBarHome
        duration={animation.duration}
        animateEntry={animations.home}
        initialOpacity={animation.opacity} 
      >
        <p><b>About Us</b></p>
        <p>Our Products</p>
        <p>Blog</p>
        <p>Contact Us</p>
        <NavbarEnd>
          <Button color={colors.dark} border='none' onClick={handleLogin}><p>Log In</p></Button>
          <Button background={colors.green}>Sign Up</Button>
        </NavbarEnd>
      </NavBarHome>
      <LogoDefault 
        duration={animation.duration}
        animateEntry={animations.home}
        initialX={animation.xLeft}  
        initialOpacity={animation.opacity}    
      />
      <Description
        duration={animation.duration}
        animateEntry={animations.home}
        initialX={animation.xLeft}   
        initialOpacity={animation.opacity} 
      >
        <p>Make the smart choice for sustainability with Elk Sockets. Our smart sockets <b>can increase your business's energy efficiency by up to 30% and reduce CO2 emissions by up to 20%.</b></p>
        <br/>
        <p>By optimizing your electrical demands, Elk Sockets help you save money on your energy bills and do your part for the environment.</p>
      </Description>

      <VBox /><VBox />
      
      <Row
        duration={animation.duration}
        animateEntry={animations.home}
        initialX={animation.xLeft}
        initialOpacity={animation.opacity} 
      >
        <Button color={colors.primary} border={`${colors.primary} 4px solid`}>Our products</Button>
        <HBox />
        <Button background={colors.primary}>Contact us!</Button>
      </Row>
      <ImageDisplay
        duration={animation.duration}
        animateEntry={animations.home}
        initialX={animation.xRight}
        initialOpacity={animation.opacity}  
      >
        <img alt="Elk Socket" src={require('../../assets/images/socket.png')} />
      </ImageDisplay>
    </Container>
  );
}

export default Home;