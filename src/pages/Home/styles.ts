import styled from 'styled-components';
import theme from '../../styles/theme';
import SloganLogo from '../../assets/images/slogan-logo.png';

import AnimatedContainer from '../../components/AnimatedContainers/Generic';


export const Menu = styled.aside`
@media screen and (max-width: 600px) {
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

    @media screen and (max-width: 600px) {
        &{
            flex-direction: column;
            justify-content: center;
            padding-right: 16px;
            gap: ${theme.spacings.default};
            padding-top: 30px;
        }
    }
    @media screen and (min-width: 600px) and (max-width: 1100px) {
        &{
            padding-right: 8px;
            gap: 0px;
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

    @media screen and (max-width: 600px) {
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

    @media screen and (max-width: 773px){
        padding-left: 8px;
        padding-right: 8px;
    }
`;

export const LogoDefault = styled(AnimatedContainer)`
    &{
        display: flex;
        height: 18vh;

        margin-top: 72px;
    
        background-image: url(${SloganLogo});
        background-size: contain;
        background-repeat: no-repeat;
    }
    
    @media screen and (max-width: 500px){
        &{
            height: 58px;
            margin-top: 17px;
        }
    }

    @media screen and (min-width: 500px) and (max-width: 600px){
        &{
            height: 80px;
            margin-top: 17px;
        }
    }

    @media screen and (min-width: 811px) and (max-width: 930px){
        &{
            height: 10vh;
            margin-top: 40px;
        }
    }

    @media screen and (min-width: 770px) and (max-width: 810px){
        &{
            height: 10vh;
            margin-top: 20px;
        }
    }

    @media screen and (min-width: 600px) and (max-width: 770px){
        &{
            height: 10vh;
            margin-top: 20px;
        }
    }

    @media screen and (min-width: 200px) and (max-width: 360px){
        &{
            height: 8vh;
        }
    }
`;

export const Container = styled.div`
    &{
        margin-left: 100px;
    }

    @media screen and (max-width: 600px) {
        &{
        margin-left: 16px;
        }
    }

    @media screen and (min-width: 600px) and (max-width: 1015px) {
        &{
            margin-left: 32px;
            padding-right: 0px;
        }
    }
`;

export const Description = styled(AnimatedContainer)`
    &{
        width: 45vw;
        padding-top: 47px;
        text-align: justify;
    }

    @media screen and (max-width: 600px){
        &{
            width: 94vw;
            padding-top: 40px;    
            padding-right: 20px;
        }
    }

    @media screen and (min-width: 601px) and (max-width: 1100px){
        &{
            padding-top: 20px;
        }
    }
`;

export const Row = styled(AnimatedContainer)`
    &{
        display: flex;
        flex-direction: row;
    }

    @media screen and (max-width: 600px) {
        &{
            flex-direction: column;
            justify-content: center;
            gap: 8px;
            width: 90%; 
            bottom: 32px;
            position: fixed;

        }
    }

    @media screen and (min-width: 800px) and (max-width: 600px)  {
        &{
            flex-direction: column;
            justify-content: center;
            gap: 8px;
            width: 95%; 
            bottom: 0%;
            position: fixed;

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

    @media screen and (max-width: 600px) {
        &{
            display:none;
        }
    }

    @media screen and (max-width: 880px) and (min-width: 800px){
        &{
            height: 70vh;
        }
    }

    @media screen and (max-width: 800px) and (min-width: 700px){
        &{
            height: 70vh;
        }
    }

    @media screen and (max-width: 700px) and (min-width: 600px){
        &{
            height: 60vh;
        }
    }

`;

export const Collapse = styled.input`
    &{
        display: none;
    }

    @media screen and (max-width: 600px) {
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
@media (max-width: 600px) {
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
    padding-right: 16px;
`;

