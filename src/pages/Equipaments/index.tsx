import React from 'react';

import Table from '../../components/Table'
import PageTitle from '../../components/PageTitle';

import * as S from './styles';

const Equipaments: React.FC = () => {
  return (
    <S.Container>
      <PageTitle title='Equipamentos'/>
      <Table/>
      
    </S.Container>
  );
}

export default Equipaments;