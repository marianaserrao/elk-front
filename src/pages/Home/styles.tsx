import styled from 'styled-components';
import theme from '../../styles/theme';
import NameLogo from '../../assets/images/name-logo-default.png';

import AnimatedContainer from '../../components/AnimatedContainers/Generic';

export const NavBarHome = styled(AnimatedContainer)`
    flex-direction: row;
    display: flex;  
    gap: 45px;
    padding-top: 30px;
`;

export const NavbarEnd = styled.div`
    flex-direction: row;
    display: flex;
    gap: ${theme.spacings.default};
    justify-content: flex-end;
    flex-grow: 1;
    padding-right: 54px;
`;

interface ButtonProps {
    background?: string;
    color?: string;
    border?: string;
}

export const Button = styled.button<ButtonProps>`
    padding-top: ${theme.spacings.small};
    padding-bottom: ${theme.spacings.small};
    color: ${(props) => props.color ?? theme.colors.light};
    background: ${(props) => props.background ?? theme.colors.light};
    padding-left: ${theme.spacings.large};
    padding-right: ${theme.spacings.large};
    border-radius: ${theme.spacings.default};
    border: ${(props) => props.border};
`;

export const LogoDefault = styled(AnimatedContainer)`
    display: flex;
    height: 111px;

    margin-top: 72px;

    background-image: url(${NameLogo});
    background-size: contain;
    background-repeat: no-repeat;
`;

export const Container = styled.div`
    margin-left: 100px;
`;

export const Description = styled(AnimatedContainer)`
    width: 45vw;
    padding-top: 47px;
`;

export const Row = styled(AnimatedContainer)`
    display: flex;
    flex-direction: row;
`;

export const ImageDisplay = styled(AnimatedContainer)`
    justify-content: end;
    display: flex;
    bottom: 0;
    right: 0;
    position: absolute;
    height: 85vh;
`;