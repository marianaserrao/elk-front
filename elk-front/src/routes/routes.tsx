import Dashboard from '../pages/Dashboard'
import Home from '../pages/Home';
import { Routes } from './interfaces'

export const privateRoutes = [
  ['dashboard', 'Dashboard', <Dashboard/>],
  ['equipaments', 'Equipamentos', <Dashboard/>],
  ['suggestions', 'Sugestões', <Dashboard/>],
  ['spaces', 'Espaços', <Dashboard/>],
  ['sustentatibility', 'Sustentabilidade', <Dashboard/>] 
] as Routes


export const publicRoutes = [
  ['home', 'Home', <Home />]
] as Routes