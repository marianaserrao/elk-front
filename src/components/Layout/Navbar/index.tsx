import React from 'react';

import { privateRoutes } from '../../../routes/routes';
import { Route } from '../../../routes/interfaces';
import Navtab from './tab';

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