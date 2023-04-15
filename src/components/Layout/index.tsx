import React, { useCallback, useMemo, useState } from 'react';
import {Outlet, useLocation} from "react-router-dom"
import { useTheme } from 'styled-components';
import MenuIcon from '@mui/icons-material/MenuRounded';
import Drawer from '@mui/material/Drawer';

import {privateRoutes} from '../../routes/routes'
import { removeLastBar } from '../../utils/paths';

import RouteSlidingContainer from '../AnimatedContainers/RouteSlidingContainer';
import PageTitle from './PageTitle';
import Navbar from "./Navbar"
import { Container, DrawerContainer, Header, Logo, TitleContainer } from './styles';

const Layout: React.FC = () => {
  const {colors} = useTheme()
  const {pathname} = useLocation()

  const [openedMenu, setOpenedMenu] = useState(false)

  const route = useMemo(()=>(
    privateRoutes.filter((route)=>route.path===removeLastBar(pathname))[0]
  ),[pathname])

  const toggleNavbar = useCallback((event: any)=>{
    event.preventDefault();    
    setOpenedMenu(!openedMenu)
  },[openedMenu])

  return (
    <Container>
      <Navbar/>
      <RouteSlidingContainer>
        <Header>
          <TitleContainer>
            <Logo/>
            <PageTitle title={route.title}/>
          </TitleContainer>
          <DrawerContainer>
            <button onClick={toggleNavbar}>
              <MenuIcon fontSize='large'/>
            </button>
            <Drawer
              open={openedMenu}
              onClose={toggleNavbar}
            >
              <Navbar style={{backgroundColor: colors.primary}} onNav={toggleNavbar}/>
            </Drawer>
          </DrawerContainer>
        </Header>
        <Outlet/>
      </RouteSlidingContainer>
    </Container>
  );
}

export default Layout;