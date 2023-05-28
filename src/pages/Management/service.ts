export const equipmentData = {
  data: [
    {
      id: 'ASD2143H2',
      name: 'HF3-R1223',
      usage: 33,
      categoryId: 1,
      status: 0,
      isOn: true
    },
    {
      id: 'SDBIQ3412',
      name: 'HL3-F4200',
      usage: 21,
      categoryId: 1,
      status: 1,
      isOn: true
    },
    {
      id: 'DQER434RI',
      name: 'SF1-LS200',
      usage: 0,
      categoryId: 1,
      status: 0,
      isOn: false
    },
    {
      id: 'DQW4E3EF',
      name: 'DF4-MN200',
      usage: 50,
      categoryId: 1,
      status: 1,
      isOn: true
    },
    {
      id: 'QODK3988',
      name: 'LF3-OIA00',
      usage: 29,
      categoryId: 1,
      status: 1,
      isOn: true
    }
  ]
}

export const categoryData = {
  data: [
    {
      id: 0,
      name: 'Televison',
      equipmentTotal: 32,
      equipmentOn: 31,
      equipmentInefficient: 2,
      usageTotal: 450,
      usageMean: 30,
      montlhyLoss: 100,
      isOn: true
    },
    {
      id: 1,
      name: 'Heater',
      equipmentTotal: 20,
      equipmentOn: 11,
      equipmentInefficient: 8,
      usageTotal: 2000,
      usageMean: 245,
      montlhyLoss: 675,
      isOn: true
    },
    {
      id: 2,
      name: 'Minibar',
      equipmentTotal: 38,
      equipmentOn: 35,
      equipmentInefficient: 2,
      usageTotal: 900,
      usageMean: 78,
      montlhyLoss: 2000,
      isOn: true
    },
  ]
}

export const categories = {
  0: 'Televison',
  1: 'Heater',
  2: 'Minibar'
}