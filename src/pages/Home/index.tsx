import React, { useCallback, useMemo, useState } from 'react';
import { NavbarEnd, NavBarHome, Button, LogoDefault, Container, Description, Row, ImageDisplay, LabelCollapse, Menu, Content, PaddingRight } from './styles';
import { HBox, VBox } from '../../styles/spacing';
import { useTheme } from 'styled-components';
import { useAuth } from '../../hooks/auth';
import MenuIcon from '@mui/icons-material/MenuRounded';
import CloseIcon from '@mui/icons-material/Close';

const disloc = 100

const Home: React.FC = () => {
  const { colors, animations } = useTheme();
  const { login } = useAuth();

  const [openedMenu, setOpenedMenu] = useState(false)

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

  
  const toggleNavbar = useCallback((event: any)=>{
    event.preventDefault();    
    setOpenedMenu(!openedMenu)
  },[openedMenu])


  return (
    <Container>
      <LabelCollapse className="close-menu-label" >
        <button onClick={toggleNavbar}>
                {openedMenu ? <CloseIcon fontSize='large' /> : <MenuIcon fontSize='large'/>} 
        </button>
      </LabelCollapse>
      <Menu className='menu' show={openedMenu}>
        <NavBarHome
          duration={animation.duration}
          animateEntry={animations.home}
          initialOpacity={animation.opacity}
        >
          <Button color={colors.dark} border='none'><p><b>About Us</b></p></Button>
          <Button color={colors.dark} border='none'><p>Our product</p></Button>
          <Button color={colors.dark} border='none'><p>Blog</p></Button>
          <Button color={colors.dark} border='none'><p>Contact us</p></Button>
          <NavbarEnd>
            <Button color={colors.primary} border={`${colors.primary} 2px solid;`} onClick={handleLogin}><p>Log In</p></Button>
            <Button background={colors.dark}>Sign Up</Button>   
          </NavbarEnd>
        </NavBarHome>
      </Menu>
      <Content className='content' show={openedMenu}>
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

        <p>Make the smart choice for sustainability with Elk Suggestions. Our intelligent system enhances energy efficiency, reduces costs, and minimizes environmental impact. By optimizing electrical demands, Elk Suggestions helps you save money on energy bills while driving progress towards a greener world.</p>
        <br></br>
        <p>Efficiency made effortless: With Elk Suggestions, achieving energy efficiency is a breeze. Our innovative smart sockets can <b>enhance your company's energy efficiency by up to 30%</b>, resulting in a remarkable 20% reduction in CO2 emissions. Additionally, Elk Suggestions can <b>help reduce your electric bill by 10%</b>. Empowered by Elk Suggestions, you can make informed decisions that not only benefit your bottom line but also contribute to a greener environment, simplifying your path towards sustainability.</p>
        
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