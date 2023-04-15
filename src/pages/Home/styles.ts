import styled from 'styled-components';
import theme from '../../styles/theme';
import NameLogo from '../../assets/images/name-logo-default.png';

import AnimatedContainer from '../../components/AnimatedContainers/Generic';


export const Menu = styled.aside`
@media screen and (max-width: 800px) {
    &{
        display:none;
    }
}
`;

export const NavBarHome = styled(AnimatedContainer)`
    &{
        flex-direction: row;
        display: flex;  
        gap: 45px;
        padding-top: 30px;
    }

    @media screen and (max-width: 800px) {
        &{
            flex-direction: column;
            justify-content: center;
            padding-right: 16px;
            gap: ${theme.spacings.default};
            padding-top: 30px;
        }
    }
`;

export const NavbarEnd = styled.div`
    &{
        flex-direction: row;
        display: flex;
        gap: ${theme.spacings.default};
        justify-content: flex-end;
        flex-grow: 1;
        padding-right: 16px;
    }

    @media screen and (max-width: 800px) {
        &{
            flex-direction: column;
            justify-content: flex-start;
            flex-grow: 0;
            padding-right: 0px;
        }
    }
`;

interface ButtonProps {
    background?: string;
    color?: string;
    border?: string;
}

export const Button = styled.button<ButtonProps>`
    
    &{
        padding-top: ${theme.spacings.small};
        padding-bottom: ${theme.spacings.small};
        color: ${(props) => props.color ?? theme.colors.light};
        background: ${(props) => props.background ?? theme.colors.light};
        padding-left: ${theme.spacings.large};
        padding-right: ${theme.spacings.large};
        border-radius: ${theme.spacings.default};
        border: ${(props) => props.border};
    }

`;

export const LogoDefault = styled(AnimatedContainer)`
    &{
        display: flex;
        height: 111px;
    
        margin-top: 72px;
    
        background-image: url(${NameLogo});
        background-size: contain;
        background-repeat: no-repeat;
    }
    
    @media screen and (max-width: 800px){
        &{
            height: 58px;
            margin-top: 17px;
        }
    }
`;

export const Container = styled.div`
    &{
        margin-left: 100px;
    }
    @media screen and (max-width: 800px) {
        &{
        margin-left: 16px;
        
        padding-right: 0px;
        }
    }

`;

export const Description = styled(AnimatedContainer)`
    &{
        width: 45vw;
        padding-top: 47px;
    }

    @media screen and (max-width: 800px){
        &{
            width: 94vw;
            padding-top: 20px;
            text-align: justify;
            
        padding-right: 20px;
        }
    }
`;

export const Row = styled(AnimatedContainer)`
    &{
        display: flex;
        flex-direction: row;
    }

    @media screen and (max-width: 800px) {
        &{
            flex-direction: column;
            justify-content: center;
            gap: 8px;
        }
    }
`;

export const ImageDisplay = styled(AnimatedContainer)`
    &{
        justify-content: end;
        display: flex;
        bottom: 0;
        right: 0;
        position: absolute;
        height: 85vh;
    }

    @media screen and (max-width: 800px) {
        &{
            display:none;
        }
    }

`;

export const Collapse = styled.input`
    &{
        display: none;
    }

    @media screen and (max-width: 800px) {
        &:checked~.menu{
            display: block;
            
        }
        &:checked~.close-menu-label::after {
            content: '×';
        }
        &:checked~.content{
            display: none;
        }
    }
`;

export const LabelCollapse = styled.label`
@media (max-width: 800px) {
    &:after {
        content: '☰';
        position: fixed;
        z-index: 2;
        top: 1rem;
        right: 1rem;
        color: ${theme.colors.dark};
        font-size: 3rem;
        line-height: 3rem;
        width: 2.5rem;
        height: 2.5rem;
        text-align: center;
        padding: 0.5rem;
        cursor: pointer;
    }
}
`;

export const Content = styled.div`
`;

export const PaddingRight = styled.div`
    padding-right: 20px;
`;