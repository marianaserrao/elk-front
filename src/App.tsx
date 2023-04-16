import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import AppProvider from './hooks';
import GlobalStyle from './styles/global';
import Routes from './routes';
import Onboarding from './components/Onboarding';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppProvider>
          <Onboarding/>
          <Routes />
      </AppProvider>

      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
