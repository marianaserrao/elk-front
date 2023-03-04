import React from 'react';
import { useTheme } from 'styled-components';
import MaterialReactTable, { MRT_ColumnDef } from 'material-react-table';
import {FiTrash2} from 'react-icons/fi'
import { HiOutlineEye } from 'react-icons/hi';
import { createTheme, MenuItem, ThemeProvider } from '@mui/material';

interface TableProps{
  columns: MRT_ColumnDef[],
  data: {}[],
  title: string,
  allowActions?: boolean,
  allowDelete?: boolean,
  allowView?: boolean
}

const Table: React.FC<TableProps> = ({
  data, 
  columns, 
  title,
  allowActions = true,
  allowDelete = true,
  allowView = true
}) => {
  const {colors, shadows, radius, fontFamily} = useTheme()

  const materialTheme = createTheme({
    palette: {
      background: {
        default: colors.cardBackground,
      },
    },
    typography: {
      fontFamily: fontFamily.default,
    },
  });

  const overwriteStyle = {
    borderRadius: radius.default
  }

  return (
    <ThemeProvider theme={materialTheme}>
      <MaterialReactTable 
        //basic data
        columns={columns} 
        data={data}   
        //overwriting table style  
        muiTableHeadRowProps={{ sx: overwriteStyle }}
        muiTopToolbarProps={{ sx: overwriteStyle }}
        muiBottomToolbarProps={{ sx: overwriteStyle }}
        muiTablePaperProps={{
          sx: {
            boxShadow: shadows.default,
            ...overwriteStyle
          },
        }}
        //action customization
        enableFilters={false}
        enableRowActions={allowActions}
        positionActionsColumn='last'
        renderRowActionMenuItems={({ row, closeMenu }) => {
          let actionButtons = []
          allowView && actionButtons.push(
            <MenuItem
              key={0}
              disableGutters={false}
              style={{
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
              onClick={() => {
                console.info('View Profile', row);
                closeMenu()
              }}
            >
              <HiOutlineEye 
                size={22} 
                color={colors.grey} 
              /> 
              Ver Detalhes
            </MenuItem>
          )
          allowDelete && actionButtons.push(
            <MenuItem
              key={0}
              disableGutters={false}
              style={{
                alignItems: 'center' 
              }}
              onClick={() => {
                console.info('View Profile', row);
                closeMenu()
              }}
            >
              <FiTrash2 
                size={22} 
                color={colors.grey} 
              /> 
              Deletar
            </MenuItem>
          )
          return(actionButtons)
        }}
        //adding title
        renderTopToolbarCustomActions={() => {
          return (
            <h4 style={{
                margin: '10px 0 10px 5px',
                fontSize: '22px'
              }}
            >
              {title}
            </h4>
          );
        }}
        //setting initial format
        initialState={{
          density: 'compact',
        }}
      />
    </ThemeProvider>
  )
};

export default Table;