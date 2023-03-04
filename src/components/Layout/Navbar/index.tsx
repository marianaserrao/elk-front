import React, { useCallback } from 'react';
import {BiLogOut} from 'react-icons/bi'
import { useTheme } from 'styled-components';

import { privateRoutes } from '../../../routes/routes';
import { useAuth } from '../../../hooks/auth';

import Navtab from './Tab';

import * as S from './styles';

const Navbar: React.FC = () => {
  const {logout}=useAuth()
  const {colors} = useTheme();

  const handleLogout = useCallback((event: any)=>{
    event.preventDefault();
    logout();
  },[])

  return (
    <S.Container>
      <S.Content>        
        <S.Logo/>
        {
          privateRoutes.map((route, index) => (
            <Navtab key={index} route={route}/>
            ))
        }
        <S.LogoutButton onClick={handleLogout}>
          <BiLogOut size={22} color={colors.light}/>
          Logout
        </S.LogoutButton>
      </S.Content>
    </S.Container>
  );
}

export default Navbar;