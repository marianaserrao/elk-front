export default {
    colors: {
        primary: '#077ED4',
        secondary: '#D1E1FA',
        light: '#FDFDFD',
        dark: '#121212',
        grey: '#757575',
        background:'#FAFAFA',
        cardBackground:'#FFFFFF',
        success: '#009A8A',
        error: '#c53030',
        green: '#193233',
        chart: ['#759FBC','#b592a0','#8CAE68', '#59594A', "F2A65A"]
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
        medium: '12px'
    },
    transitions: {
        default: '180ms ease-in-out',
        motionDefault:0.8,
        motionExit:0.8,
    },
    radius: {
        default: '8px',
        small: '4px'
    },
    shadows: {
        default: '8px 4px 15px rgba(141, 154, 253, 0.1)',
        strong: '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)',
    },
    animations: {
        home: true,
        navabar: true,
        privateContainers: true,
        equpamentTables: false
    }
} as const;
