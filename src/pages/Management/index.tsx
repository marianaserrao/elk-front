import React, { useMemo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useTheme } from 'styled-components';

import EquipmentTable from './EquipmentTable'
import CategoryTable from './CategoryTable';

import * as S from './styles';

const Management: React.FC = () => {
  const {animations} = useTheme()

  const containerVariant = {
    visible: {
      transition: {
          delayChildren: 0.2,
          staggerChildren: 0.2,
      }
    }
  }

  const itemVariant = {
    hidden: { 
      y: 50, 
      opacity: 0 
    },
    visible: {
        y: 0,
        opacity: 1 
    }
};

  const tables = useMemo(()=>([
    <EquipmentTable/>,
    <CategoryTable/>,
  ]),[])

  return (
    <S.Container
      variants={containerVariant}
      initial={animations.equpamentTables ? "hidden" : "visible"}
      animate="visible"
    >
      <AnimatePresence>
        {
          tables.map((table, index)=>(
            <motion.div
              key={index}
              variants={itemVariant}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {table}
            </motion.div>
          ))
        }
      </AnimatePresence>
    </S.Container>      
  );
}

export default Management;