import React from 'react';

// import { Container } from './styles';

type LegendItem = {
  value: string,
  color: string
}
export interface LegendProps{
  payload: LegendItem[]
}

const Legend: React.FC<LegendProps> = ({payload}) => {
  return (
    <ul>
      {
        payload.map((entry, index) => (
          <li key={`item-${index}`}>{entry.value}</li>
        ))
      }
    </ul>
  );;
}

export default Legend;