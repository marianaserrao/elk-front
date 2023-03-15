import {ReactNode} from 'react'

export type Routes= Route[]

export type Route = {
  path: string,
  title: string,
  element: ReactNode,
  icon?: string,
}