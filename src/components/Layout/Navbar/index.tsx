import React from 'react';

import { privateRoutes } from '../../../routes/routes';
import Navtab from './tab';

import { 
  Container,
  Content,
  Logo,
} from './styles';

const Navbar: React.FC = () => {

  return (
    <Container>
      <Content>        
        <Logo/>
        {
          privateRoutes.map((route, index) => (
            <Navtab key={index} route={route}/>
            ))
        }
      </Content>
    </Container>
  );
}

export default Navbar;