import { PropsWithChildren, createContext, useCallback, useContext, useMemo } from 'react';

import { useSetState } from 'react-use';
import { Step } from 'react-joyride';

export interface OnboardingStateProps {
  run: boolean;
  stepIndex: number;
  steps: Step[];
  tourActive: boolean;
}

interface OnboardingData {
  state: OnboardingStateProps,
  setState: Function,
  setOnboarded(): void
}

export const OnboardingContext = createContext<OnboardingData>({} as OnboardingData);
OnboardingContext.displayName = 'OnboardingContext';

export const OnboardingProvider: React.FC<PropsWithChildren> = ({children}) => {
  const [state, setState] = useSetState({
    // run: !localStorage.getItem('@Elk:onboard'),
    stepIndex: 0,
    steps: [],
    // tourActive: !localStorage.getItem('@Elk:onboard'),
    run: true,
    tourActive: true
  });

  const setOnboarded = useCallback(()=>{
    // localStorage.setItem('@Elk:onboard', 'elk-sockets');
    setState({
      // tourActive:false, 
      run: false
    })
  },[state])

  const value = useMemo(
    () => ({
      state,
      setState,
      setOnboarded
    }),
    [setState, state],
  );

  return (
    <OnboardingContext.Provider value={value}>
      {children}
    </OnboardingContext.Provider>
  );
}

export function useOnboardingContext(): OnboardingData {
  const context = useContext(OnboardingContext);

  if (!context) {
    throw new Error('useOnboardingContext must be used within a OnboardingProvider');
  }

  return context;
}