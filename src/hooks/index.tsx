import React from 'react';

import theme from '../styles/theme';
import { PropsWithChildren } from 'react';

import { ThemeProvider } from 'styled-components'
import { AuthProvider } from './auth';
import { OnboardingProvider } from './onboarding';

const AppProvider: React.FC<PropsWithChildren> = ({children}) => {
    return (
        <ThemeProvider theme={theme}> 
          <OnboardingProvider>
            <AuthProvider>
              {children}
            </AuthProvider> 
          </OnboardingProvider>         
        </ThemeProvider>
    )
};

export default AppProvider;