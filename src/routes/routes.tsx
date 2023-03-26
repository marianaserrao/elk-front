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
    icon: 'socket.png',
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
    subRoutes: [3,4,5]
  },
  {
    path: '/suggestions/tariffs', 
    title: 'Tarifários',
    icon: 'eletricity.png',
    element:  <TariffChange/>,
  },
  {
    path: '/suggestions/equipament-change', 
    title: 'Equipamentos',
    icon: 'equipament.png',
    element:  <EquipamentChange />,
  },
  {
    path: '/suggestions/usage-period-change', 
    title: 'Horário de Uso',
    icon: 'watch.png',
    element:  <PeriodChange />,
  },
  {
    path: '/sustainability', 
    title: 'Sustentabilidade',
    icon: 'sustainability.png',
    element:  <EquipamentDetail/>,
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