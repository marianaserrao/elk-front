import React, { useCallback, useMemo } from 'react';
import { useTheme } from 'styled-components';
import { MRT_ColumnDef } from 'material-react-table';
import {RiErrorWarningLine} from 'react-icons/ri'
import {FiCheck} from 'react-icons/fi'

import Table from './GenericTable'
import Switch from '../Switch';

import { equipamentData, categories } from './dummyData';

const EquipamentTable: React.FC = () => {
  const {colors} = useTheme()

  const switchEquipament = useCallback((switchState: boolean, id: string)=>{
    //request to switch equpament
    let updatedState=!switchState
    return updatedState
  },[])

  //should be memoized or stable
  const columns = useMemo<MRT_ColumnDef[]>(
    () => [
      {
        accessorKey: 'id',
        header: 'ID',
        size: 150
      },
      {
        accessorKey: 'name',
        header: 'Nome',
        size: 150
      },
      {
        accessorKey: 'usage',
        header: 'Uso',
        Cell: ({renderedCellValue}) => {
          return renderedCellValue+' kWh';
        },
        size: 150
      },
      {
        accessorKey: 'categoryId',
        header: 'Categoria',
        Cell: ({cell}) => {
          return categories[cell.getValue() as keyof typeof categories];
        },
        size: 150
      },
      {
        accessorKey: 'status',
        header: 'Status',
        Cell: ({renderedCellValue}) => {
          return (
            !!renderedCellValue
            ? <FiCheck size={24} color={colors.success}/>
            : <RiErrorWarningLine size={24} color={colors.error}/>
          );
        },
        size:80,
      },
      {
        accessorKey: 'isOn',
        header: 'On/Off',
        Cell: ({row}) => {
          let cell=row.original as typeof equipamentData.data[0]
          return <Switch requestFunction={switchEquipament} initialState={cell.isOn} itemId={cell.id} />;
        },
        size:80,
        
      },
    ],
    [switchEquipament, colors],
  );

  return (
    <Table
        columns={columns} 
        data={equipamentData.data}
        title='Equipamentos'
    />
  )
};

export default EquipamentTable;