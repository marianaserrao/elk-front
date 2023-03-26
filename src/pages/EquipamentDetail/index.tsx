import React, { useCallback, useState } from 'react';
import { ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line } from 'recharts';
import Switch from '../../components/Switch';
import { HBox, VBox } from '../../styles/spacing';
import { Row } from '../Home/styles';
import { data, mainAnalytics, usageByCategory } from './dummyData';
import { Card, Padding} from "./style"
import ReactSpeedometer from "react-d3-speedometer"
import Chart from '../../components/Chart';
import AnalyticCard from '../../components/AnalyticCard';
import Position from '../../components/Position/styles';
import api from '../../services/api';

interface Information {
    power: number;
    status: boolean;
    equipment: string;
}

export const EquipamentDetail: React.FC = () => {
    const [isSocketOn, setIsSocketOn] = useState(false);
    const [information, setInformation] =useState<Information>();
    const [timerCounter, setTimerCounter] = useState(0);
    const [nextSampledValue, setNextSampledValue] =useState(0);
    const [currentSampledValue, setCurrentSampledValue] =useState(0);
    
    const switchEquipament = useCallback((switchState: boolean, id: string)=>{
        //request to switch equpament
        let updatedState=!switchState
        return updatedState
      },[]);

    React.useEffect(() => {
        const intervalId = setInterval(() => { 
            setCurrentSampledValue(nextSampledValue);
            if(timerCounter === 0) {
                setCurrentSampledValue(nextSampledValue);
                const request = api.get('/status');
                request.then((response) => {
                    setNextSampledValue(response.data.power);
                    setInformation(response.data)
                })
                console.log(currentSampledValue)
            } else {
                let power = currentSampledValue + timerCounter*(currentSampledValue - nextSampledValue)/9;
                setInformation({
                    power: power,
                    equipment: information?.equipment ?? 'Geladeira',
                    status: information?.status ?? false
                })
                console.log(`coisa ${power}, ${currentSampledValue}, ${nextSampledValue}`)
            }
            let coisa = timerCounter + 1
            setTimerCounter(coisa)
            if(timerCounter === 9) setTimerCounter(0)
        }, 1000);
        return () => clearInterval(intervalId);//
    }, [timerCounter, nextSampledValue, currentSampledValue, information]);

    return(<div>
        <Position type={'absolute'} top={16} right={60}> 
            <Switch requestFunction={switchEquipament} initialState={information?.status ?? false} itemId={''} />
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
        <Row>
            <Card fullSize={true} >
                <p>Uso em tempo real (Watts)</p>
                <Padding top={100}>            
                    <ReactSpeedometer
                    maxValue={60}
                    value={information?.power}
                    segmentColors={['#53AE30', '#FFDD00', '#E73854']}
                    segments={3}
                    needleTransitionDuration={1000}
                    />
                </Padding>
            </Card>
            <HBox />
            <Card fullSize={true} >
                <Chart 
                title='Uso por categoria' 
                xAxis='date'
                type='line' 
                data={usageByCategory}
                style={{width:'100%', height: 500}}
                initialPeriodIndex={0}
                />
            </Card>
        </Row>
    </div>)
}