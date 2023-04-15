import React, { useCallback, useState } from 'react';
import Switch from '../../components/Switch';
import { VBox } from '../../styles/spacing';
import { mainAnalytics, usageByCategory } from './service';
import ReactSpeedometer from "react-d3-speedometer"
import AnalyticCard from '../../components/AnalyticCard';
import Position from '../../components/Position/styles';
import api from '../../services/api';

import * as S from "./style"
import LineChart from '../../components/Charts/LineChart';
import SelectableChart from '../../components/Charts/SelectableChart';
import { AnalyticsContainer } from '../Dashboard/styles';
import { Title } from '../../components/Charts/styles';

interface Information {
    power: number;
    status: boolean;
    equipment: string;
}

const EquipamentDetail: React.FC = () => {
    const [information, setInformation] =useState<Information>();
    
    const switchEquipament = useCallback((switchState: boolean, id: string)=>{
        const request = api.get('/toggle');
        
        let updatedState=switchState
        request.then(response => {
            if(response.status === 200){
                updatedState = !switchState
            }
        })
        return updatedState
      },[]);
    
    const fetchData = React.useCallback(() => {
        const request = api.get('/status');
        request.then((response) => {
            setInformation(response.data)
        })
    }, []);
    
    React.useEffect(() => {
        fetchData();
    }, [fetchData])

    React.useEffect(() => {
        const intervalId = setInterval(() => { 
            fetchData();
        }, 10000);
        return () => clearInterval(intervalId);//
    }, [fetchData]);

    return(<div>
        <Position type={'absolute'} top={16} right={60}> 
            <S.SwitchContainer>
                <h3>ON/OFF</h3>
                <Switch requestFunction={switchEquipament} initialState={information?.status as boolean} itemId={''} />
            </S.SwitchContainer>
        </Position>
        <AnalyticsContainer>
        {
            mainAnalytics.map((item, index)=>(
              <AnalyticCard 
              key={index}
              mainText={item.value}
              description={item.description}
              percentage={item.variation}
              realtime={item.realtime}
              />
            ))
          }
        </AnalyticsContainer>
        <VBox />
        <S.MainCardContainer>
            <S.Card fullSize={true} >
                <Title>{"Uso em tempo real (Watts)"}</Title>
                <S.Padding top={100}>            
                    <ReactSpeedometer
                    maxValue={60}
                    value={information?.power}
                    segmentColors={['#53AE30', '#FFDD00', '#E73854']}
                    segments={3}
                    needleTransitionDuration={1000}
                    />
                </S.Padding>
            </S.Card>
            <S.Card>          
                <SelectableChart 
                    title='Uso por categoria' 
                    xAxis='date'
                    data={usageByCategory}
                    initialPeriodIndex={0}
                    Chart = {LineChart}
                />
            </S.Card>
        </S.MainCardContainer>
    </div>)
}

export default EquipamentDetail