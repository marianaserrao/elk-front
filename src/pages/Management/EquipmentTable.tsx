import React, { useCallback, useMemo } from 'react';
import { useTheme } from 'styled-components';
import { MRT_ColumnDef } from 'material-react-table';
import {RiErrorWarningLine} from 'react-icons/ri'
import {FiCheck} from 'react-icons/fi'

import Table from '../../components/Table'
import Switch from '../../components/Switch';

import { equipmentData, categories } from './service';
import { useLocation } from 'react-router-dom';

const EquipmentTable: React.FC = () => {
  const location = useLocation()
  const {colors} = useTheme()

  const switchEquipment = useCallback((switchState: boolean, id: string)=>{
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
        header: 'Name',
        size: 150
      },
      {
        accessorKey: 'usage',
        header: 'Usage this month',
        Cell: ({renderedCellValue}) => {
          return renderedCellValue+' kWh';
        },
        size: 150
      },
      {
        accessorKey: 'categoryId',
        header: 'Category',
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
          let cell=row.original as typeof equipmentData.data[0]
          return <Switch requestFunction={switchEquipment} initialState={cell.isOn} itemId={cell.id} />;
        },
        size:80,
        
      },
    ],
    [switchEquipment, colors],
  );

  return (
    <Table
        columns={columns} 
        data={equipmentData.data}
        title='Equipments'
    />
  )
};

export default EquipmentTable;