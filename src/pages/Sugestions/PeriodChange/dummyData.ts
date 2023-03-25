import theme from '../../../styles/theme'
const {colors} = theme

export const tariffs={
  'normal': {
    value: 'Custo normal', 
    color: colors.primary
  },
  'high': {
    value: 'Custo alto', 
    color: colors.error
  },
  'low': {
    value: 'Custo baixo', 
    color: colors.success
  },
}

export const usageByTime = {
  'Último dia' : [
    {
      hour: '1h',
      amt: 2100,
      tariff: 'high'
    },
    {
      hour: '2h',
      amt: 2290,
      tariff: 'high'
    },
    {
      hour: '3h',
      amt: 2220,
      tariff: 'normal'
    },
    {
      hour: '4h',
      amt: 2000,
      tariff: 'normal'
    },
    {
      hour: '5h',
      amt: 2387,
      tariff: 'low'
    },
    {
      hour: '6h',
      amt: 2500,
      tariff: 'normal'
    },
    {
      hour: '7h',
      amt: 2100,
      tariff: 'high'
    },
    
    {
      hour: '8h',
      amt: 2100,
      tariff: 'high'
    },
    {
      hour: '9h',
      amt: 2210,
      tariff: 'high'
    },
    {
      hour: '10h',
      amt: 2290,
      tariff: 'normal'
    },
    {
      hour: '11h',
      amt: 2800,
      tariff: 'normal'
    },
    {
      hour: '12h',
      amt: 2181,
      tariff: 'normal'
    },
    {
      hour: '13h',
      amt: 2500,
      tariff: 'normal'
    },
    {
      hour: '14h',
      amt: 2100,
      tariff: 'high'
    },
    
    {
      hour: '15h',
      amt: 2400,
      tariff: 'high'
    },
    {
      hour: '16h',
      amt: 2210,
      tariff: 'high'
    },
    {
      hour: '17h',
      amt: 2590,
      tariff: 'normal'
    },
    {
      hour: '18h',
      amt: 2000,
      tariff: 'normal'
    },
    {
      hour: '19h',
      amt: 2181,
      tariff: 'low'
    },
    {
      hour: '20h',
      amt: 2500,
      tariff: 'normal'
    },
    {
      hour: '21h',
      amt: 2100,
      tariff: 'high'
    },
    
    {
      hour: '22h',
      amt: 2181,
      tariff: 'low'
    },
    {
      hour: '23h',
      amt: 2500,
      tariff: 'normal'
    },
    {
      hour: '24h',
      amt: 2000,
      tariff: 'high'
    },
  ],
  'Último mês' : [
    {
      hour: '1h',
      amt: 2400,
      tariff: 'high'
    },
    {
      hour: '2h',
      amt: 2210,
      tariff: 'high'
    },
    {
      hour: '3h',
      amt: 2290,
      tariff: 'normal'
    },
    {
      hour: '4h',
      amt: 2000,
      tariff: 'normal'
    },
    {
      hour: '5h',
      amt: 2181,
      tariff: 'low'
    },
    {
      hour: '6h',
      amt: 2500,
      tariff: 'normal'
    },
    {
      hour: '7h',
      amt: 2100,
      tariff: 'high'
    },
    
    {
      hour: '8h',
      amt: 2400,
      tariff: 'high'
    },
    {
      hour: '9h',
      amt: 2210,
      tariff: 'high'
    },
    {
      hour: '10h',
      amt: 2290,
      tariff: 'high'
    },
    {
      hour: '11h',
      amt: 2000,
      tariff: 'normal'
    },
    {
      hour: '12h',
      amt: 2181,
      tariff: 'low'
    },
    {
      hour: '13h',
      amt: 2500,
      tariff: 'normal'
    },
    {
      hour: '14h',
      amt: 2100,
      tariff: 'high'
    },
    
    {
      hour: '15h',
      amt: 2400,
      tariff: 'high'
    },
    {
      hour: '16h',
      amt: 2210,
      tariff: 'high'
    },
    {
      hour: '17h',
      amt: 2290,
      tariff: 'normal'
    },
    {
      hour: '18h',
      amt: 2000,
      tariff: 'normal'
    },
    {
      hour: '19h',
      amt: 2181,
      tariff: 'low'
    },
    {
      hour: '20h',
      amt: 2500,
      tariff: 'normal'
    },
    {
      hour: '21h',
      amt: 2100,
      tariff: 'high'
    },
    
    {
      hour: '22h',
      amt: 2181,
      tariff: 'low'
    },
    {
      hour: '23h',
      amt: 2500,
      tariff: 'normal'
    },
    {
      hour: '24h',
      amt: 2100,
      tariff: 'high'
    },
  ],
  'Último ano' : [
    {
      hour: '1h',
      amt: 3000,
      tariff: 'high'
    },
    {
      hour: '2h',
      amt: 2210,
      tariff: 'high'
    },
    {
      hour: '3h',
      amt: 2090,
      tariff: 'normal'
    },
    {
      hour: '4h',
      amt: 2000,
      tariff: 'normal'
    },
    {
      hour: '5h',
      amt: 2281,
      tariff: 'low'
    },
    {
      hour: '6h',
      amt: 2500,
      tariff: 'normal'
    },
    {
      hour: '7h',
      amt: 2109,
      tariff: 'high'
    },
    
    {
      hour: '8h',
      amt: 2400,
      tariff: 'high'
    },
    {
      hour: '9h',
      amt: 2250,
      tariff: 'high'
    },
    {
      hour: '10h',
      amt: 2290,
      tariff: 'normal'
    },
    {
      hour: '11h',
      amt: 2000,
      tariff: 'normal'
    },
    {
      hour: '12h',
      amt: 2181,
      tariff: 'low'
    },
    {
      hour: '13h',
      amt: 2500,
      tariff: 'normal'
    },
    {
      hour: '14h',
      amt: 2180,
      tariff: 'high'
    },
    
    {
      hour: '15h',
      amt: 2400,
      tariff: 'high'
    },
    {
      hour: '16h',
      amt: 2110,
      tariff: 'high'
    },
    {
      hour: '17h',
      amt: 2290,
      tariff: 'normal'
    },
    {
      hour: '18h',
      amt: 2300,
      tariff: 'normal'
    },
    {
      hour: '19h',
      amt: 2181,
      tariff: 'low'
    },
    {
      hour: '20h',
      amt: 3000,
      tariff: 'normal'
    },
    {
      hour: '21h',
      amt: 2100,
      tariff: 'high'
    },
    
    {
      hour: '22h',
      amt: 2381,
      tariff: 'low'
    },
    {
      hour: '23h',
      amt: 2590,
      tariff: 'normal'
    },
    {
      hour: '24h',
      amt: 2000,
      tariff: 'high'
    },
  ],
};