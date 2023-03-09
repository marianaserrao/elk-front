import React from 'react';

import EquipamentTable from '../../components/Tables/EquipamentTable'
import CategoryTable from '../../components/Tables/CategoryTable';
import PageTitle from '../../components/PageTitle';

import * as S from './styles';
import SlidingContainer from '../../components/AnimatedContainers/SlidingContainer';

const Equipaments: React.FC = () => {
  return (
    <SlidingContainer>
      <PageTitle title='Equipamentos'/>
      <S.Content>
        <EquipamentTable/>
        <CategoryTable/>
      </S.Content>
      
    </SlidingContainer>
  );
}

export default Equipaments;