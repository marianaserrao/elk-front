import React, { HTMLAttributes, useCallback } from 'react';
import {BiLogOut} from 'react-icons/bi'
import { useTheme } from 'styled-components';

import { privateRoutes } from '../../../routes/routes';
import { useAuth } from '../../../hooks/auth';
import { useOnboardingContext } from '../../../hooks/onboarding';

import Navtab from './Tab';
import Toggle from './Toggle'

import * as S from './styles';
import { HiOutlineEye } from 'react-icons/hi';

interface NavbarProps extends HTMLAttributes<HTMLDivElement>{
  onNav?: Function;
}

const Navbar: React.FC<NavbarProps> = ({onNav, ...rest}) => {
  const {logout}=useAuth();
  const {showOnboarding}=useOnboardingContext();
  const {colors} = useTheme();

  const handleLogout = useCallback((event: any)=>{
    event.preventDefault();
    logout();
  },[logout])

  const handleViewTutorial = useCallback((event: any)=>{
    event.preventDefault();
    showOnboarding();
  },[showOnboarding])

  return (
    <S.Container>
      <S.Content {...rest}>        
        <S.Logo/>
        {
          privateRoutes.map((route, index) => (
            route.onNavBar && (
              route.isToggle
              ? <Toggle key={index} route={route} onNav={onNav}/>
              : <Navtab key={index} route={route} onClick={onNav as any}/>
            )
            ))
        }
        <S.ActionButonsContainer>
          <S.ActionButton onClick={handleLogout}>
            <BiLogOut size={22} color={colors.light}/>
            Logout
          </S.ActionButton>
          <S.ActionButton onClick={handleViewTutorial}>
            <HiOutlineEye size={22} color={colors.light}/>
            Tutorial
          </S.ActionButton>
        </S.ActionButonsContainer>
      </S.Content>
    </S.Container>
  );
}

export default Navbar;