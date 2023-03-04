import Dashboard from '../pages/Dashboard'
import Equipaments from '../pages/Equipaments'
import Home from '../pages/Home';
import { Routes } from './interfaces'

export const privateRoutes = [
  ['dashboard', 'Dashboard', <Dashboard/>],
  ['equipaments', 'Equipamentos', <Equipaments/>],
  ['suggestions', 'Sugestões', <Dashboard/>],
  ['spaces', 'Espaços', <Dashboard/>],
  ['sustainability', 'Sustentabilidade', <Dashboard/>] 
] as Routes


export const publicRoutes = [
  ['home', 'Home', <Home />]
] as Routes