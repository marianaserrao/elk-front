import {ReactNode} from 'react'

export type Routes= Route[]

export type Route = {
  id?: string,
  path: string,
  title: string,
  element: ReactNode,
  icon?: string,
  onNavBar?: boolean,
  isToggle?:boolean,
  subRoutes?: number[]
}