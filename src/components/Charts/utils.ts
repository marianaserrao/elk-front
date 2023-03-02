import theme from '../../styles/theme'
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

export const lineChart = {
  lineColors:{
    uv: theme.colors.primary,
    pv: theme.colors.success
  },
  data : [
    {
      date: 'set/23',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      date: 'set/23',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      date: 'set/23',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      date: 'set/23',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      date: 'set/23',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      date: 'set/23',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      date: 'set/23',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ]
};

export const barChart = {
  data : [
    {
      hour: '1',
      amt: 2400,
      tariff: 'high'
    },
    {
      hour: '1',
      amt: 2210,
      tariff: 'high'
    },
    {
      hour: '1',
      amt: 2290,
      tariff: 'normal'
    },
    {
      hour: '1',
      amt: 2000,
      tariff: 'normal'
    },
    {
      hour: '1',
      amt: 2181,
      tariff: 'low'
    },
    {
      hour: '1',
      amt: 2500,
      tariff: 'normal'
    },
    {
      hour: '1',
      amt: 2100,
      tariff: 'high'
    },
    
    {
      hour: '5',
      amt: 2400,
      tariff: 'high'
    },
    {
      hour: '1',
      amt: 2210,
      tariff: 'high'
    },
    {
      hour: '1',
      amt: 2290,
      tariff: 'normal'
    },
    {
      hour: '1',
      amt: 2000,
      tariff: 'normal'
    },
    {
      hour: '1',
      amt: 2181,
      tariff: 'low'
    },
    {
      hour: '1',
      amt: 2500,
      tariff: 'normal'
    },
    {
      hour: '1',
      amt: 2100,
      tariff: 'high'
    },
    
    {
      hour: '1',
      amt: 2400,
      tariff: 'high'
    },
    {
      hour: '1',
      amt: 2210,
      tariff: 'high'
    },
    {
      hour: '1',
      amt: 2290,
      tariff: 'normal'
    },
    {
      hour: '1',
      amt: 2000,
      tariff: 'normal'
    },
    {
      hour: '1',
      amt: 2181,
      tariff: 'low'
    },
    {
      hour: '1',
      amt: 2500,
      tariff: 'normal'
    },
    {
      hour: '1',
      amt: 2100,
      tariff: 'high'
    },
    
    {
      hour: '1',
      amt: 2181,
      tariff: 'low'
    },
    {
      hour: '1',
      amt: 2500,
      tariff: 'normal'
    },
    {
      hour: '1',
      amt: 2100,
      tariff: 'high'
    },
  ]
};

