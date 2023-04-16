import React, {HTMLAttributes, ReactNode } from 'react';

import * as S from './styles';

interface CardProps extends HTMLAttributes<HTMLDivElement>{
  title: string,
  chart: ReactNode
  link?:{
    href: string,
    text: string
  }
  iconUrl?: string
  fullSize?: boolean
}

const Card: React.FC<CardProps> = ({
  title,
  chart,
  link,
  iconUrl=false,
  children,
  ...rest
}) => {
  
  return (
    <S.CardContainer {...rest}>
      <S.CardMain fullSize={rest.fullSize}>
        <S.CardTitle>  
          {iconUrl && <div style={{backgroundImage: `url(${iconUrl})`}}/>}
          <h3>{title}</h3>
        </S.CardTitle>
        <S.CardInfoContainer>
          {children}
        </S.CardInfoContainer>
      </S.CardMain>
      {chart === '' ? <></>:<S.CardChart>
        {chart}
      </S.CardChart>}
      {link && <a href={link?.href} target="_blank">{link?.text}</a>}
    </S.CardContainer>
  );
}

export default Card;