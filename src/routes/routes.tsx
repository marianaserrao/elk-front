import Dashboard from '../pages/Dashboard'
import Equipaments from '../pages/Equipaments'
import Home from '../pages/Home';
import { EquipamentDetail } from '../pages/Equipaments/detail';

export const privateRoutes = [
  {
    path: '/dashboard', 
    title: 'Dashboard',
    icon: 'dashboard.png',
    element:  <Dashboard />
  },
  {
    path: '/equipaments', 
    title: 'Equipamentos',
    icon: 'equipaments.png',
    element:  <Equipaments />
  },
  {
    path: '/suggestions', 
    title: 'Sugestões',
    icon: 'suggestions.png',
    element:  <Dashboard />
  },
  {
    path: '/equipaments/details', 
    title: 'HF3-R1200',
    icon: 'equipaments.png',
    element:  <EquipamentDetail />
  },
  {
    path: '/spaces', 
    title: 'Espaços',
    icon: 'spaces.png',
    element:  <Dashboard />
  },
  {
    path: '/sustainability', 
    title: 'Sustentabilidade',
    icon: 'sustainability.png',
    element:  <Dashboard />
  },
]

export const publicRoutes = [
  {
    path: '/home', 
    title: 'Home',
    element:  <Home />
  }
]