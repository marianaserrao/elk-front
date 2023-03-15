import styled from 'styled-components';
import {motion} from 'framer-motion';

export const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;

  gap: ${({theme})=>theme.spacings.large};
`;