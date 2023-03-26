import SlidingContainer from '../Generic';
import styled from 'styled-components';

export const Container = styled(SlidingContainer)`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;

    padding: ${({theme})=>theme.spacings.large+' 5%'};
`;
