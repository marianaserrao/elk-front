import React, { useState, useCallback, useMemo, useEffect } from 'react';
import Joyride, { CallBackProps, STATUS, Step } from 'react-joyride';
import { useTheme } from 'styled-components';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import { useOnboardingContext } from '../../hooks/onboarding';
import {privateRoutes} from '../../routes/routes'

import { Container } from './styles';
import { useMount } from 'react-use';

const Onboarding: React.FC = () => {
  const {colors} = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const {
    setState,
    state: { run, stepIndex, steps },
    setOnboarded
  } = useOnboardingContext();

  useMount(() => {
    setState({
      steps:[
        {
          content: (
            <Container key='welcome'>
              <img src={require('../../assets/images/elk-mascote.png')}/>
              <h2>Olá, Maria! Vou te apresentar a plataforma, é muito simples!</h2>
            </Container>
          ),
          placement: 'center',
          target: 'body',
        },
        {
          content: (
            <Container key='dashboard'>
              <img src={require('../../assets/images/elk-mascote.png')}/>
              <h2>Aqui tu consegues ver uma análise geral do consumo energético da tua empresa</h2>
            </Container>
          ),
          target: '#dashboard',
        },
        {
          content: (
            <Container key='management'>
              <img src={require('../../assets/images/elk-mascote.png')}/>
              <h2>No Gerenciamento tu consegues controlar remotamente aparelhos e identificar aparelhos ineficientes</h2>
            </Container>
          ),
          target: '#management',
        },
        {
          content: (
            <Container key='equipament'>
              <img src={require('../../assets/images/elk-mascote.png')}/>
              <h2>Economize dinheiro a longo prazo trocando equipamentos ineficientes!</h2>
            </Container>
          ),
          target: '#equipament-suggestions',
        },
        {
          content: (
            <Container key='tarriff'>
              <img src={require('../../assets/images/elk-mascote.png')}/>
              <h2>Economize dinheiro a longo prazo trocando equipamentos ineficientes!</h2>
            </Container>
          ),
          target: '#tarriff-suggestions',
        },
        {
          content: (
            <Container key='period'>
              <img src={require('../../assets/images/elk-mascote.png')}/>
              <h2>Economize dinheiro a longo prazo trocando equipamentos ineficientes!</h2>
            </Container>
          ),
          target: '#period-suggestions',
        },
        {
          content: (
            <Container key='sustainability'>
              <img src={require('../../assets/images/elk-mascote.png')}/>
              <h2>Aprenda o impacto de teus equipamentos com exemplos do teu dia a dia.</h2>
            </Container>
          ),
          target: '#sustainability',
        },
        {
          content: (
            <Container key='goodbye'>
              <img src={require('../../assets/images/elk-mascote.png')}/>
              <h2>Economia começa com escolhas inteligentes, fique sempre atento às nossas sugestões!</h2>
            </Container>
          ),
          placement: 'center',
          target: 'body',
        },
      ]
    })
  })

  const handleJoyrideCallback = useCallback((data: CallBackProps) => {
    const { status, index, action, type, size } = data;
    const finishedStatuses: string[] = [STATUS.FINISHED, STATUS.SKIPPED];

    console.log(data)

    navegation: if(type === 'step:after'){
      let nextTarget = ''
      let nextIndex = 0
      if(action==='next'){
        if(index<size-1){
          nextTarget = steps[index+1].target as string
          nextIndex = index+1
        }
        else{
          //end of tour
          setOnboarded();
          break navegation;
        }
      }
      else if(action==='prev' && index>1){
        nextTarget = steps[index-1].target as string 
        nextIndex = index-1 
      }

      let nextRoute = privateRoutes.filter(route=>route.id===nextTarget.replace('#',''))
      if(nextRoute.length!=0){
        setState({ run: index===0, stepIndex: nextIndex })  
        const {path} = nextRoute[0]
        navigate(
          path,
          {state:{from: location}}
        );
      }else{
        setState({ stepIndex: nextIndex })  
      }
    }

    if (finishedStatuses.includes(status)||action==='close') {
      setOnboarded()
    }
  },[setState, steps, run, stepIndex]);

  return (
    <Container>
      <Joyride
        callback={handleJoyrideCallback}
        continuous
        hideCloseButton
        disableScrolling
        run={run}
        stepIndex={stepIndex}
        scrollToFirstStep
        showProgress
        showSkipButton
        locale = {{
          back: 'Voltar', 
          last: 'Último', 
          next: 'Avançar', 
          skip: 'Pular'
        }}
        steps={steps}
        styles={{
          options: {
            primaryColor: colors.primary,
            textColor: colors.dark,
          }
        }}
      />
    </Container>
  );
}

export default Onboarding;
