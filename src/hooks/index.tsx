import React from 'react';

import theme from '../styles/theme';
import { PropsWithChildren } from 'react';

import { ThemeProvider } from 'styled-components'

const AppProvider: React.FC<PropsWithChildren> = ({children}) => {
    return (
        <ThemeProvider theme={theme}>            
          {children}
        </ThemeProvider>
    )
};

export default AppProvider;