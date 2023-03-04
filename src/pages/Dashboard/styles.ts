import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;

  margin: 20px 8%;
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  
  width: 100%;

  margin-bottom: 20px;

  >div{
    display:flex;
  }

`;

export const AnalyticContainer = styled.div`
 display: flex;
`;
