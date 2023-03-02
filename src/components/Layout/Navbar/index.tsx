import React from 'react';

import { privateRoutes } from '../../../routes/routes';
import Navtab from './Tab';

import { 
  Container,
  Logo,
} from './styles';

const Navbar: React.FC = () => {

  return (
    <Container>
      <Logo/>
      {
        privateRoutes.map(route => (
            <Navtab route={route}/>
        ))
      }
    </Container>
  );
}

export default Navbar;