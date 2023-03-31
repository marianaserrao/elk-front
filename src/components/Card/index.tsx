import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height:100% ;
    width: 100%;
    
    display: flex;

    background-color: ${({theme})=>theme.colors.cardBackground};
    box-shadow: ${({theme})=>theme.shadows.default};

    border-radius: ${({theme})=>theme.radius.default};
    padding: 15px;
`;

const Card: React.FC<HTMLAttributes<HTMLDivElement>> = ({children, ...rest}) => {
  return (
    <Container {...rest}>
      {children}
    </Container>
  );
}

export default Card;