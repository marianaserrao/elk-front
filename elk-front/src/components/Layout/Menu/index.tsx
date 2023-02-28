import React from 'react';

import { 
  Container,
  Logo,
} from './styles';

interface TabProps {
  selectedTab: string,
  tabTitle: string,
  path: string,
}

const Menu: React.FC = () => {
  return (
    <Container>
      <Logo/>
    </Container>
  );
}

export default Menu;