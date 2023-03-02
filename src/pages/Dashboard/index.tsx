import React from 'react';
import BarChart from '../../components/Charts/BarChart';

import LineChart from '../../components/Charts/LineChart';
import PageTitle from '../../components/PageTitle';

import { 
  Container 
} from './styles';

const menu: React.FC = () => {
  return (
    <Container>
      <PageTitle title='Dashboard'/>
      <LineChart style={{width:'100%', height: 400}}/>
      <BarChart style={{width:'100%', height: 400}}/>
    </Container>
  );
}

export default menu;