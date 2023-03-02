import React from 'react';
import styled from 'styled-components';

// import { Container } from './styles';
interface TitleProps {
  title: string;
}

const Title = styled.p`
  font-weight: 700;
  font-size: 22px;
  padding-bottom: 18px;
`;

const PageTitle: React.FC<TitleProps> = ({title}) => {
  return <Title>{title}</Title>;
}

export default PageTitle;