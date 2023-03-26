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
    const [information, setInformation] =useState<Information>();
    
    const switchEquipament = useCallback((switchState: boolean, id: string)=>{
        const request = api.get('/toggle');
        
        let updatedState=switchState
        request.then(response => {
            if(response.status == 200){
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
    }, [])

    React.useEffect(() => {
        const intervalId = setInterval(() => { 
            fetchData();
        }, 10000);
        return () => clearInterval(intervalId);//
    }, []);

    return(<div>
        <Position type={'absolute'} top={16} right={60}> 
            <Switch requestFunction={switchEquipament} initialState={information?.status as boolean} itemId={''} />
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