import React, { useCallback, useMemo } from 'react';
import { useTheme } from 'styled-components';
import MaterialReactTable, { MRT_ColumnDef } from 'material-react-table';
import {RiErrorWarningLine} from 'react-icons/ri'
import {FiCheck, FiTrash2} from 'react-icons/fi'
import { HiOutlineEye } from 'react-icons/hi';
import { createTheme, MenuItem, ThemeProvider } from '@mui/material';

import { equipamentData, categories } from './utils';
import Switch from '../Switch';

const Example: React.FC = () => {
  const {colors, shadows, radius, fontFamily} = useTheme()

  const switchEquipament = useCallback((switchState: boolean, id: string)=>{
    //request to switch equpament
    let updatedState=!switchState
    return updatedState
  },[])

  const materialTheme = createTheme({
    palette: {
      background: {
        default: colors.cardBackground,
      },
    },
    typography: {
      fontFamily: fontFamily.default
    }
  });

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
    <ThemeProvider theme={materialTheme}>
      <MaterialReactTable 
        columns={columns} 
        data={equipamentData.data}     
        muiTablePaperProps={{
          sx: {
            backgroundColor:colors.cardBackground,
            boxShadow: shadows.default,
            borderRadius: radius.default
          },
        }}
        muiTableHeadRowProps={{
          sx: {
            borderRadius: radius.default
          },
        }}
        muiBottomToolbarProps={{
          sx: {
            borderRadius: radius.default
          },
        }}
        enableFilters={false}
        enableRowActions
        positionActionsColumn='last'
        renderRowActionMenuItems={({ row, closeMenu }) => [
          <MenuItem
          key={0}
          disableGutters={false}
          onClick={() => {
            console.info('View Profile', row);
            closeMenu()
          }}
          >
            <HiOutlineEye 
              size={22} 
              color={colors.grey} 
              style={{marginRight:'5px'}}
              /> Ver Detalhes
          </MenuItem>,
          <MenuItem
          key={1}
          onClick={() => {
            console.info('Remove', row);
            closeMenu()
          }}
          >
            <FiTrash2 
              size={22} 
              color={colors.grey} 
              style={{marginRight:'5px'}}
              /> Deletar
          </MenuItem>
      ]}
      />
    </ThemeProvider>
  )
};

export default Example;
