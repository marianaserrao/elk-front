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
  onboarding: OnboardingStateProps,
  setOnboarding: Function,
  stopOnboarding(): void,
  showOnboarding(): void
}

export const OnboardingContext = createContext<OnboardingData>({} as OnboardingData);
OnboardingContext.displayName = 'OnboardingContext';

export const OnboardingProvider: React.FC<PropsWithChildren> = ({children}) => {
  const [onboarding, setOnboarding] = useSetState({
    run: !localStorage.getItem('@Elk:onboard'),
    stepIndex: 0,
    steps: [],
    tourActive: !localStorage.getItem('@Elk:onboard'),
  });

  const stopOnboarding = useCallback(()=>{
    localStorage.setItem('@Elk:onboard', 'elk-sockets');
    setOnboarding({
      tourActive:false, 
      run: false
    })
  },[onboarding])

  const showOnboarding = useCallback(() => {
    localStorage.removeItem('@Elk:user');
    setOnboarding({
      tourActive:true, 
      run: true
    })
  }, [onboarding]);


  const value = useMemo(
    () => ({
      onboarding,
      setOnboarding,
      stopOnboarding,
      showOnboarding
    }),
    [setOnboarding, onboarding],
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