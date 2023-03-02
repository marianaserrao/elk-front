import React, {HTMLAttributes, useCallback} from 'react';
import {BiUpArrowAlt, BiDownArrowAlt} from 'react-icons/bi';
import * as S from './styles';

interface CardProps extends HTMLAttributes<HTMLDivElement>{
  mainText: string,
  description: string,
  percentage: number,
  color: 'red'|'green'
}

const AnalyticCard: React.FC<CardProps> = ({mainText, description, percentage, color='green', ...rest}) => {
  const divideSuperstrings = useCallback((str: string)=>{
    let sentenceArray = str.split('_')
    return sentenceArray
  },[])

  return (
    <S.Container>
      <S.CardMain>
        <span>
          <img src={require(`../../assets/icons/signal-${color}.png`)} alt={`${color} circle`}/>
        </span>
        <h3>{
        divideSuperstrings(mainText).map((str,index)=>(
          index%2===0
          ? str
          : <sup>{str}</sup>
        ))  
        }</h3>
      </S.CardMain>
      <S.CardFooter>
        <div>
          {
            divideSuperstrings(description).map((str,index)=>(
              index%2===0
              ? str
              : <sup>{str}</sup>  
            ))
          }
        </div>
        <div>
          {
            percentage>0
            ? (
              <div>
                <BiUpArrowAlt size={14}/>
                <p>{percentage}%</p>
              </div>
            )
            : (
              <div>
                <BiDownArrowAlt size={14}/>
                <p>{-percentage}%</p>
              </div>
            )
          }
        </div>
      </S.CardFooter>
    </S.Container>
  );
}

export default AnalyticCard;