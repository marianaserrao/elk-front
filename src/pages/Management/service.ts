export const equipamentData = {
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
      name: 'Televisão',
      equipamentTotal: 32,
      equipamentOn: 31,
      equipamentInefficient: 2,
      usageTotal: 450,
      usageMean: 30,
      montlhyLoss: 100,
      isOn: true
    },
    {
      id: 1,
      name: 'Aquecedor',
      equipamentTotal: 20,
      equipamentOn: 11,
      equipamentInefficient: 8,
      usageTotal: 2000,
      usageMean: 245,
      montlhyLoss: 675,
      isOn: true
    },
    {
      id: 2,
      name: 'Frigobar',
      equipamentTotal: 38,
      equipamentOn: 35,
      equipamentInefficient: 2,
      usageTotal: 900,
      usageMean: 78,
      montlhyLoss: 2000,
      isOn: true
    },
  ]
}

export const categories = {
  0: 'Televisão',
  1: 'Aquecedor',
  2: 'Frigobar'
}