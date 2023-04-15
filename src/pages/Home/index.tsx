import React, { useCallback, useMemo } from 'react';
import { NavbarEnd, NavBarHome, Button, LogoDefault, Container, Description, Row, ImageDisplay, Collapse, LabelCollapse, Menu, Content, PaddingRight } from './styles';
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
      <Collapse id="close-menu" className="close-menu" type="checkbox" aria-label="Close menu" role="button" />
      <LabelCollapse className="close-menu-label" htmlFor="close-menu" title="close menu" />
      <Menu className='menu'>
        <NavBarHome
          duration={animation.duration}
          animateEntry={animations.home}
          initialOpacity={animation.opacity}
        >
          <Button color={colors.dark} border='none'><p><b>About Us</b></p></Button>
          <Button color={colors.dark} border='none'><p>Our Products</p></Button>
          <Button color={colors.dark} border='none'><p>Blog</p></Button>
          <Button color={colors.dark} border='none'><p>Contact Us</p></Button>
          <NavbarEnd>
            <Button color={colors.primary} border={`${colors.primary} 2px solid;`} onClick={handleLogin}><p>Log In</p></Button>
            <Button background={colors.dark}>Sign Up</Button>   
          </NavbarEnd>
        </NavBarHome>
      </Menu>
      <Content className='content'>
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
        <PaddingRight>
        <Row
          duration={animation.duration}
          animateEntry={animations.home}
          initialX={animation.xLeft}
          initialOpacity={animation.opacity} 
        >

            <Button color={colors.dark} border='none' onClick={handleLogin}><p>Log In</p></Button>
            <HBox />
            <Button background={colors.primary} border='none'>Sign Up</Button>   
        </Row>
        </PaddingRight>
        <ImageDisplay
          duration={animation.duration}
          animateEntry={animations.home}
          initialX={animation.xRight}
          initialOpacity={animation.opacity}  
        >
          <img alt="Elk Socket" src={require('../../assets/images/home-background.png')} />
          <img alt="Elk Socket" src={require('../../assets/images/elk-socket.png')} />
        </ImageDisplay>
      </Content>
    </Container>
  );
}

export default Home;