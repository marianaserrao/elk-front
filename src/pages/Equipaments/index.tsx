import React from 'react';

import EquipamentTable from '../../components/Tables/EquipamentTable'
import CategoryTable from '../../components/Tables/CategoryTable';
import PageTitle from '../../components/PageTitle';

import * as S from './styles';

const Equipaments: React.FC = () => {
  return (
    <S.Container>
      <PageTitle title='Equipamentos'/>
      <S.Content>
        <EquipamentTable/>
        <CategoryTable/>
      </S.Content>
      
    </S.Container>
  );
}

export default Equipaments;