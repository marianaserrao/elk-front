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
        privateRoutes.map((route, index) => (
            <Navtab key={index} route={route}/>
        ))
      }
    </Container>
  );
}

export default Navbar;