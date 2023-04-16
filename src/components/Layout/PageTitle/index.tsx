import React from 'react';
import styled from 'styled-components';
import { useOnboardingContext } from '../../../hooks/onboarding';
import { useLocation } from 'react-router-dom';
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
    setState,
    state: { stepIndex, tourActive},
  } = useOnboardingContext();

  useMount(() => {
    if (tourActive && stepIndex!=0) {
      setTimeout(() => {
        setState({ run: true});
      }, 800);
    }
  });

  return <Title>{title}</Title>;
}

export default PageTitle;