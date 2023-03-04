import React from 'react';

import theme from '../styles/theme';
import { PropsWithChildren } from 'react';

import { ThemeProvider } from 'styled-components'
import { AuthProvider } from './auth';

const AppProvider: React.FC<PropsWithChildren> = ({children}) => {
    return (
        <ThemeProvider theme={theme}> 
          <AuthProvider>
            {children}
          </AuthProvider>          
        </ThemeProvider>
    )
};

export default AppProvider;