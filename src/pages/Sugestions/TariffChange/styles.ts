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

export const CardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    

    background-color: ${({theme})=>theme.colors.cardBackground};
    box-shadow: ${({theme})=>theme.shadows.default};

    border-radius: ${({theme})=>theme.radius.default};
    padding: 15px;

    a{
      color:${({theme})=>theme.colors.grey};
      font-size: 12px;

      margin-top: 50px;
    }
`;