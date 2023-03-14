import styled from 'styled-components';
import {motion} from 'framer-motion';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
`;

export const Content = styled(motion.div)`
  display: flex;
  flex-direction: column;

  gap: ${({theme})=>theme.spacings.large};
`;