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
    setOnboarding,
    onboarding: { run, stepIndex, steps },
    stopOnboarding
  } = useOnboardingContext();

  useMount(() => {
    const isDesktop = window.innerWidth >= 800;
    let navbarTarget = isDesktop ? '#desktop-navbar' : '#mobile-navbar'
    setOnboarding({
      steps:[
        {
          content: (
            <Container key='welcome'>
              <img src={require('../../assets/images/elk-mascote.png')}/>
              <h2>Hello, Maria! I'm going to introduce you to the platform, it's very simple!</h2>
            </Container>
          ),
          placement: 'center',
          target: 'body',
        },
        {
          content: (
            <Container key='navbar'>
              <img src={require('../../assets/images/elk-mascote.png')}/>
              <h2>This is the navigation bar, it's where you'll learn more about your business. Let's navigate!</h2>
            </Container>
          ),
          placement: 'right',
          target: navbarTarget,
        },
        {
          content: (
            <Container key='dashboard'>
              <img src={require('../../assets/images/elk-mascote.png')}/>
              <h2>Here you can see a general analysis of your company's energy consumption.</h2>
            </Container>
          ),
          target: '#dashboard',
        },
        {
          content: (
            <Container key='management'>
              <img src={require('../../assets/images/elk-mascote.png')}/>
              <h2>In Management, you can remotely control your equipaments and identify the inefficient ones.</h2>
            </Container>
          ),
          target: '#management',
        },
        {
          content: (
            <Container key='equipament'>
              <img src={require('../../assets/images/elk-mascote.png')}/>
              <h2>Here in the Equipament tab you can save money in the long run by replacing inefficient equipment!</h2>
            </Container>
          ),
          target: '#equipament-suggestions',
        },
        {
          content: (
            <Container key='tarriff'>
              <img src={require('../../assets/images/elk-mascote.png')}/>
              <h2>In Tariff, find out if the electric tariff chosen by your company is the ideal one.</h2>
            </Container>
          ),
          target: '#tarriff-suggestions',
        },
        {
          content: (
            <Container key='period'>
              <img src={require('../../assets/images/elk-mascote.png')}/>
              <h2>In the Time of Day tab, you can save money by using energy when it's cheaper.</h2>
            </Container>
          ),
          target: '#period-suggestions',
        },
        {
          content: (
            <Container key='sustainability'>
              <img src={require('../../assets/images/elk-mascote.png')}/>
              <h2>In Sustainability, you can learn the impact of your equipment with examples from your daily life.</h2>
            </Container>
          ),
          target: '#sustainability',
        },
        {
          content: (
            <Container key='goodbye'>
              <img src={require('../../assets/images/elk-mascote.png')}/>
              <h2>Sustainability start with smart choices, always pay attention to our suggestions!</h2>
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
      let nextIndex = 0
      if(action==='next'){
        if(index<size-1){
          nextIndex = index+1
        }
        else{
          //end of tour
          stopOnboarding();
          navigate(
            'dashboard/',
            {state:{from: location}}
          );
          break navegation;
        }
      }
      else if(action==='prev' && index>1){
        nextIndex = index-1 
      }
      
      let nextTarget = steps[nextIndex].target as string 
      let nextRoute = privateRoutes.filter(route=>route.id===nextTarget.replace('#',''))
      if(nextRoute.length!=0){
        setOnboarding({ run: index<2, stepIndex: nextIndex })  
        const {path} = nextRoute[0]
        navigate(
          path,
          {state:{from: location}}
          );
      }else{
        setOnboarding({ stepIndex: nextIndex })  
      }
    }

    if (finishedStatuses.includes(status)||action==='close') {
      stopOnboarding()
      navigate(
        'dashboard/',
        {state:{from: location}}
      );
    }
  },[setOnboarding, steps, run, stepIndex]);

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
