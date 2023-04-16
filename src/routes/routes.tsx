import Dashboard from '../pages/Dashboard'
import Management from '../pages/Management'
import Home from '../pages/Home';
import EquipamentDetail from '../pages/EquipamentDetail';
import PeriodChange from '../pages/Sugestions/PeriodChange';
import TariffChange from '../pages/Sugestions/TariffChange';
import EquipamentChange from '../pages/Sugestions/EquipamentChange';

import { Navigate } from 'react-router-dom';
import Sustentability from '../pages/Sustentability';

export const privateRoutes = [
  {
    id: 'dashboard',
    path: '/dashboard', 
    title: 'Dashboard',
    icon: 'dashboard.png',
    element:  <Dashboard />,
    onNavBar: true
  },
  {
    id: 'management',
    path: '/management', 
    title: 'Gerenciamento',
    icon: 'socket.png',
    element:  <Management />,
    onNavBar: true
  },
  {
    id: 'suggestions',
    path: '/suggestions', 
    title: 'Sugestões',
    icon: 'suggestions.png',
    element:   <Navigate to='/suggestions/equipament-change'/>,
    onNavBar: true,
    isToggle: true,
    subRoutes: [3,4,5]
  },
  {
    id: 'equipament-suggestions',
    path: '/suggestions/equipament-change', 
    title: 'Equipamentos',
    icon: 'equipament.png',
    element:  <EquipamentChange />,
  },
  {
    id: 'tarriff-suggestions',
    path: '/suggestions/tariffs', 
    title: 'Tarifários',
    icon: 'eletricity.png',
    element:  <TariffChange/>,
  },
  {
    id: 'period-suggestions',
    path: '/suggestions/usage-period-change', 
    title: 'Horário de Uso',
    icon: 'watch.png',
    element:  <PeriodChange />,
  },
  {
    id: 'sustainability',
    path: '/sustainability', 
    title: 'Sustentabilidade',
    icon: 'sustainability.png',
    element:  <Sustentability/>,
    onNavBar: true
  },
  {
    id: 'equipament-detail',
    path: '/management/equipament', 
    title: 'Equipament Details',
    element:  <EquipamentDetail/>,
  },
]

export const publicRoutes = [
  {
    path: '/', 
    title: 'Home',
    element:  <Home />
  }
]