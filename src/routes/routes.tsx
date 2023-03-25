import Dashboard from '../pages/Dashboard'
import Management from '../pages/Management'
import Home from '../pages/Home';
import { EquipamentDetail } from '../pages/EquipamentDetail';

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
    onNavBar: true
  },
  {
    path: '/suggestions/tariffs', 
    title: 'Tarifários',
    icon: 'spaces.png',
    element:  <Dashboard />,
    onNavBar: true
  },
  {
    path: '/suggestions/equipament-change', 
    title: 'Equipamentos',
    icon: 'spaces.png',
    element:  <Dashboard />,
    onNavBar: true
  },
  {
    path: '/suggestions/usage-period-change', 
    title: 'Horário de Uso',
    icon: 'spaces.png',
    element:  <Dashboard />,
    onNavBar: true
  },
  {
    path: '/management/equipament', 
    title: 'Equipament Details',
    element:  <EquipamentDetail/>,
  },
  {
    path: '/sustainability', 
    title: 'Sustentabilidade',
    icon: 'sustainability.png',
    element:  <Dashboard />,
    onNavBar: true
  },
]

export const publicRoutes = [
  {
    path: '/home', 
    title: 'Home',
    element:  <Home />
  }
]