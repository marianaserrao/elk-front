import Dashboard from '../pages/Dashboard'
import Equipaments from '../pages/Equipaments'
import { Routes } from './interfaces'

export const privateRoutes = [
  ['dashboard', 'Dashboard', <Dashboard/>],
  ['equipaments', 'Equipamentos', <Equipaments/>],
  ['sugestions', 'Sugestões', <Dashboard/>],
  ['spaces', 'Espaços', <Dashboard/>],
  ['sustainability', 'Sustentabilidade', <Dashboard/>] 
] as Routes