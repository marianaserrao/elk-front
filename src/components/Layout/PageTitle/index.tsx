import React from 'react';
import styled from 'styled-components';
import { useOnboardingContext } from '../../../hooks/onboarding';
import { useMount } from 'react-use';

// import { Container } from './styles';
interface TitleProps {
  title: string;
  onboardingId?: string 
}

const Title = styled.p`
  font-weight: 700;
  font-size: 22px;
  padding-bottom: ${({theme})=>theme.spacings.default};
`;

const PageTitle: React.FC<TitleProps> = ({title, onboardingId}) => {
  const {
    setOnboarding,
    onboarding: { stepIndex, tourActive},
  } = useOnboardingContext();

  useMount(() => {
    if (tourActive && stepIndex!=0) {
      setTimeout(() => {
        setOnboarding({ run: true});
      }, 900);
    }
  });

  return <Title>{title}</Title>;
}

export default PageTitle;