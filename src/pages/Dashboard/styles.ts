import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
`;

export const AnalyticsContainer = styled.div`
  display: flex;
  width: fit-content;

  margin-bottom: ${({theme})=>theme.spacings.default};

  gap: ${({theme})=>theme.spacings.default};
`;

export const ChartContainer = styled.div`
  display: flex;
  flex-direction:column ;
  
  gap: ${({theme})=>theme.spacings.large};
`;
