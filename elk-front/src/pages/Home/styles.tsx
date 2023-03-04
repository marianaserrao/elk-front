import styled from 'styled-components';
import theme from '../../styles/theme';
import NameLogo from '../../assets/images/name-logo-default.png';

import Socket from '../../assets/images/socket.png';

export const NavBarHome = styled.div`
    flex-direction: row;
    display: flex;  
    gap: 45px;
    padding-top: 18px;

    p{
        padding-top:${theme.spacings.medium};
        padding-bottom: ${theme.spacings.medium};
    }
`;

export const NavbarEnd = styled.div`
    flex-direction: row;
    display: flex;
    gap: ${theme.spacings.default};
    justify-content: flex-end;
    flex-grow: 1;
    padding-right: 54px;
`;

interface Button {
    background?: string;
    color?: string;
    border?: string;
}

export const Button = styled.button<Button>`
    padding-top: ${theme.spacings.medium};
    padding-bottom: ${theme.spacings.medium};
    color: ${(props) => props.color ?? theme.colors.light};
    background: ${(props) => props.background ?? theme.colors.light};
    padding-left: ${theme.spacings.large};
    padding-right: ${theme.spacings.large};
    border-radius: ${theme.spacings.default};
    border: ${(props) => props.border};
}`;

export const LogoDefault = styled.div`
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

export const Description = styled.div`
    width: 590px;
    padding-top: 47px;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
`;

export const ImageDisplay = styled.div`
    justify-content: end;
    display: flex;
    top: 72px;
    right: 0;
    position: absolute;
    height: 535px;
`;