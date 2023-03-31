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
      <S.CardMain>
        <S.CardTitle>  
          {iconUrl && <div style={{backgroundImage: `url(${iconUrl})`}}/>}
          <h3>{title}</h3>
        </S.CardTitle>
        <S.CardInfoContainer>
          {children}
        </S.CardInfoContainer>
        {link && <a href={link?.href}>{link?.text}</a>}
      </S.CardMain>
      <S.CardChart>
        {chart}
      </S.CardChart>

    </S.CardContainer>
  );
}

export default Card;