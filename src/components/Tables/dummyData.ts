export const equipamentData = {
  data: [
    {
      id: 'ASDFGH12',
      name: 'HF3-R1200',
      usage: 30,
      categoryId: 1,
      status: 0,
      isOn: true
    },
    {
      id: 'ASDFGH12',
      name: 'HF3-R1200',
      usage: 30,
      categoryId: 1,
      status: 1,
      isOn: true
    },
    {
      id: 'ASDFGH12',
      name: 'HF3-R1200',
      usage: 30,
      categoryId: 1,
      status: 0,
      isOn: false
    },
    {
      id: 'ASDFGH12',
      name: 'HF3-R1200',
      usage: 30,
      categoryId: 1,
      status: 1,
      isOn: true
    },
    {
      id: 'ASDFGH12',
      name: 'HF3-R1200',
      usage: 30,
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