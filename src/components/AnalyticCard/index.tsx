import React, {HTMLAttributes, useCallback, useMemo} from 'react';
import { motion } from 'framer-motion';
import {BiUpArrowAlt} from 'react-icons/bi';
import { useTheme } from 'styled-components';

import * as S from './styles';

interface CardProps extends HTMLAttributes<HTMLDivElement>{
  mainText: string,
  description: string,
  percentage?: number,
  realtime?: boolean
}

const AnalyticCard: React.FC<CardProps> = ({mainText, description, percentage,realtime=false, ...rest}) => {
  const {colors} = useTheme()
  const improved = useMemo(()=>(percentage? percentage<0 : 0),[percentage])
  
  const getSuperstringSentenceComponent = useCallback((str: string)=>{
    let sentenceArray = str.split('_')
    let sentenceComponent = sentenceArray.map((str,index)=>(
      index%2===0
      ? str
      : <sup key={index}>{str}</sup>  
    ))
    return sentenceComponent
  },[])

  return (
    <S.Container {...rest}>
      <S.CardInfo>
        <span>
          {getSuperstringSentenceComponent(description)}
        </span>
      </S.CardInfo>

      <S.CardMain>
        <h3>{getSuperstringSentenceComponent(mainText)}</h3>
      </S.CardMain>  

      {percentage? 
      
      <S.CardInfo>
        <motion.div
          className="improvement-arrow"
          animate={{
            rotate: improved ? 180 : 0
          }}
        >
          <BiUpArrowAlt size={14} color={improved? colors.success:colors.error}/>
        </motion.div>
        <span
          style={{
            color:improved?colors.success:colors.error,
            fontWeight: 600
          }}
        >{Math.abs(percentage)}%&nbsp;</span>
        <span>{realtime ? 'vs média mensal' : 'vs último mês'}</span>
      </S.CardInfo>
      :
      <></>}
      
    </S.Container>
  );
}

export default AnalyticCard;