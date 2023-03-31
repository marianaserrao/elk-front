import React, { useCallback, useMemo } from 'react';
import { MRT_ColumnDef } from 'material-react-table';

import Table from '../../components/Table'
import Switch from '../../components/Switch';

import { categoryData } from './service';

const CategoryTable: React.FC = () => {
  const switchCategory = useCallback((switchState: boolean, id: string)=>{
    //request to switch category
    let updatedState=!switchState
    return updatedState
  },[])

  //should be memoized or stable
  const columns = useMemo<MRT_ColumnDef[]>(
    () => [
      {
        accessorKey: 'name',
        header: 'Nome',
        size: 150
      },
      {
        accessorKey: 'equipamentTotal',
        header: 'Equipamentos',
        size: 50
      },
      {
        accessorKey: 'equipamentOn',
        header: 'Ligados',
        size: 50
      },
      {
        accessorKey: 'equipamentInefficient',
        header: 'Ineficientes',
        size: 50
      },
      {
        accessorKey: 'usageTotal',
        header: 'Total de Uso',
        Cell: ({renderedCellValue}) => {
          return renderedCellValue+' kWh';
        },
        size:50,
      },
      {
        accessorKey: 'usageMean',
        header: 'Média de Uso',
        Cell: ({renderedCellValue}) => {
          return renderedCellValue+' kWh';
        },
        size:50,
      },
      {
        accessorKey: 'montlhyLoss',
        header: 'Perda Mensal',
        Cell: ({renderedCellValue}) => {
          return <span>&#8364; {renderedCellValue}</span>;
        },
        size:50,
      },
      {
        accessorKey: 'isOn',
        header: 'On/Off',
        Cell: ({row}) => {
          let cell=row.original as typeof categoryData.data[0]
          return <Switch requestFunction={switchCategory} initialState={cell.isOn} itemId={cell.id.toString()} />;
        },
        size:50,
        
      },
    ],
    [switchCategory],
  );

  return (
    <Table
        columns={columns} 
        data={categoryData.data}
        title='Categorias'
        allowView={false}
        initialColumnVisibility={{
          usageMean:false,
          equipamentOn:false
        }}
    />
  )
};

export default CategoryTable;