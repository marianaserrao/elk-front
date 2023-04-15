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
          <Button color={colors.dark} border='none'><p><b>Sobre nós</b></p></Button>
          <Button color={colors.dark} border='none'><p>Nossos produtos</p></Button>
          <Button color={colors.dark} border='none'><p>Blog</p></Button>
          <Button color={colors.dark} border='none'><p>Contate-nos</p></Button>
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
          <p>Faça a escolha inteligente para a sustentabilidade com Elk Sockets. As nossas tomadas inteligentes <b>podem aumentar a eficiência energética da sua empresa até 30% e reduzir as emissões de CO2 até 20%.</b></p>
          <br/>
          <p>Ao otimizar suas demandas elétricas, os soquetes Elk ajudam você a economizar dinheiro em suas contas de energia e fazer sua parte pelo meio ambiente.</p>
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