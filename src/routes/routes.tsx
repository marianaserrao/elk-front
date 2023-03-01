import Dashboard from '../pages/Dashboard'
import { Routes } from './interfaces'

export const privateRoutes = [
  ['dashboard', 'Dashboard', <Dashboard/>],
  ['equpaments', 'Equipamentos', <Dashboard/>],
  ['sugestions', 'Sugestões', <Dashboard/>],
  ['spaces', 'Espaços', <Dashboard/>],
  ['sustainability', 'Sustentabilidade', <Dashboard/>] 
] as Routes