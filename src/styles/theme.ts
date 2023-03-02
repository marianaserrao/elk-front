export default {
    colors: {
        primary: '#0093D5',
        secondary: '#D1E1FA',
        light: '#FDFDFD',
        dark: '#121212',
        background:'#FAFAFA',
        cardBackground:'#FFFFFF',
        success: '#009A8A',
        error: '#c53030',
    },
    opacities:{
        ninety:'E6',
        eigthy:'CC',
        seventy:'B3',
        sixty:'99',
        fifty:'80',
        forty:'66',
        thirty:'4D',
        twenty:'33',
        ten:'1A',
    },
    fontSizes: {
        default: '14px',
        large: '16px',
        small: '12px',
        tiny: '10px',
    },
    fontFamily: {
        default: 'Poppins'
    },
    spacings: {
        default: '16px',
        vertical: '16px 0',
        horizontal: '0 16px',
        large: '24px',
    },
    transitions: {
        default: '180ms ease-in-out',
    },
    radius: {
        default: '8px',
        small: '4px'
    },
    shadows: {
        default: '8px 4px 15px rgba(141, 154, 253, 0.1)',
    }
} as const;
