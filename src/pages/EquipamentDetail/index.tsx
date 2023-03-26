import React, { useCallback, useState } from 'react';
import { ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line } from 'recharts';
import Switch from '../../components/Switch';
import { HBox, VBox } from '../../styles/spacing';
import { Row } from '../Home/styles';
import { data } from './service';
import { Card, Padding} from "./style"
import ReactSpeedometer from "react-d3-speedometer"

export const EquipamentDetail: React.FC = () => {
    const [isSocketOn, setIsSocketOn] = useState(false);

    const switchEquipament = useCallback((switchState: boolean, id: string)=>{
        //request to switch equpament
        let updatedState=!switchState
        return updatedState
      },[]);

    return(<div>
        <Row >
            
        <Card>
            <p>Estado da tomada</p>
            <Switch requestFunction={switchEquipament} initialState={isSocketOn} itemId={''} />
        </Card>
        <HBox />
        <Card>
            <p>Energia usada hoje</p>
            <VBox />
            <p>0.39 kWh</p>
        </Card>
        <HBox />
        <Card>
            <p>Uso médio de energia</p>
            <VBox />
            <p>0.80 kWh</p>
        </Card>
        <HBox />
        <Card>
            <p>tempo de uso hoje</p>
            <VBox />
            <p>2h49m</p>
        </Card>
        <HBox />
        <Card>
            <p>tempo  de uso médio</p>
            <VBox />
            <p>3h10m</p>
        </Card>
        <HBox />
        <Card>
            <p>Dispositivo conectado</p>
            <VBox />
            <p>Desktop</p>
        </Card>
        </Row>
        <VBox />
        <Row>
            <Card fullSize={true} >
                <p>Uso em tempo real (Watts)</p>
                <Padding top={100}>            
                    <ReactSpeedometer
                    maxValue={600}
                    value={473}
                    segmentColors={['#53AE30', '#FFDD00', '#E73854']}
                    segments={3}
                    />
                </Padding>
            </Card>
            <HBox />
            <Card fullSize={true} >
                <p>Consumo total de energia</p>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="consumo" stroke="#8884d8" activeDot={{ r: 8 }} />
                    </LineChart>
                </ResponsiveContainer>
            </Card>
        </Row>
    </div>)
}