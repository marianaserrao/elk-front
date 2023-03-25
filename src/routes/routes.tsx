import Dashboard from '../pages/Dashboard'
import Management from '../pages/Management'
import Home from '../pages/Home';
import { EquipamentDetail } from '../pages/EquipamentDetail';
import PeriodChange from '../pages/Sugestions/PeriodChange';
import TariffChange from '../pages/Sugestions/TariffChange';
import EquipamentChange from '../pages/Sugestions/EquipamentChange';

export const privateRoutes = [
  {
    path: '/dashboard', 
    title: 'Dashboard',
    icon: 'dashboard.png',
    element:  <Dashboard />,
    onNavBar: true
  },
  {
    path: '/management', 
    title: 'Gerenciamento',
    icon: 'equipaments.png',
    element:  <Management />,
    onNavBar: true
  },
  {
    path: '/suggestions', 
    title: 'Sugestões',
    icon: 'suggestions.png',
    element:  <Dashboard />,
    onNavBar: true,
    isToggle: true,
    subRoutes: [
      {
        path: '/suggestions/tariffs', 
        title: 'Tarifários',
        icon: 'spaces.png',
        element:  <TariffChange/>,
        onNavBar: true
      },
      {
        path: '/suggestions/equipament-change', 
        title: 'Equipamentos',
        icon: 'spaces.png',
        element:  <EquipamentChange />,
        onNavBar: true
      },
      {
        path: '/suggestions/usage-period-change', 
        title: 'Horário de Uso',
        icon: 'spaces.png',
        element:  <PeriodChange />,
        onNavBar: true
      },
    ]
  },
  {
    path: '/suggestions/tariffs', 
    title: 'Tarifários',
    icon: 'spaces.png',
    element:  <TariffChange/>,
    onNavBar: true
  },
  {
    path: '/suggestions/equipament-change', 
    title: 'Equipamentos',
    icon: 'spaces.png',
    element:  <EquipamentChange />,
    onNavBar: true
  },
  {
    path: '/suggestions/usage-period-change', 
    title: 'Horário de Uso',
    icon: 'spaces.png',
    element:  <PeriodChange />,
    onNavBar: true
  },
  {
    path: '/management/equipament', 
    title: 'Equipament Details',
    element:  <EquipamentDetail/>,
  },
]

export const publicRoutes = [
  {
    path: '/home', 
    title: 'Home',
    element:  <Home />
  }
]