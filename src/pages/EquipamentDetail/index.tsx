import React, { useCallback, useState } from 'react';
import Switch from '../../components/Switch';
import { HBox, VBox } from '../../styles/spacing';
import { Row } from '../Home/styles';
import { mainAnalytics, usageByCategory } from './service';
import ReactSpeedometer from "react-d3-speedometer"
import AnalyticCard from '../../components/AnalyticCard';
import Position from '../../components/Position/styles';
import api from '../../services/api';

import * as S from "./style"
import Card from '../../components/Card';
import LineChart from '../../components/Charts/LineChart';
import SelectableChart from '../../components/Charts/SelectableChart';

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
            console.log(response)
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
        <Row>
        {
            mainAnalytics.map((item, index)=>(
                <>
              <AnalyticCard 
              key={index}
              mainText={item.value}
              description={item.description}
              percentage={item.variation}
              realtime={item.realtime}
              />
              {index === mainAnalytics.length-1 ?<></> : <HBox />}
              </>
            ))
          }
        </Row>
        <VBox />
        <S.MainCardContainer>
            <S.Card fullSize={true} >
                <p>Uso em tempo real (Watts)</p>
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
            <Card>          
                <SelectableChart 
                    title='Uso por categoria' 
                    xAxis='date'
                    data={usageByCategory}
                    initialPeriodIndex={0}
                    Chart = {LineChart}
                />
            </Card>
        </S.MainCardContainer>
    </div>)
}

export default EquipamentDetail