import styled from 'styled-components';

export const SelectContainer = styled.div`
  position: absolute;
  top: ${({theme})=>theme.spacings.medium};
  right: 5%;

  label{
    font-size:10px;
    color: ${({theme})=>theme.colors.dark};
    font-weight: 600;
  }
`;

export const CardListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme})=>theme.spacings.large};
`;