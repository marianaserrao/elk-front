import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({theme})=>theme.colors.cardBackground};

  border-radius: 10px;
  padding: 15px 25px 20px 10px;

  box-shadow: ${({ theme }) => theme.shadows.default};

  margin-bottom: 24px;
`;
