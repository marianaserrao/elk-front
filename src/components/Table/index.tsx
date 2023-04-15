import React from 'react';
import { useTheme } from 'styled-components';
import MaterialReactTable, { MRT_ColumnDef } from 'material-react-table';
import {FiTrash2} from 'react-icons/fi'
import { HiOutlineEye } from 'react-icons/hi';
import { createTheme, MenuItem, ThemeProvider } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

import {Equipament} from './interfaces'

interface TableProps{
  columns: MRT_ColumnDef[],
  data: {}[],
  title: string,
  allowActions?: boolean,
  allowDelete?: boolean,
  allowView?: boolean,
  initialColumnVisibility?: {}
}

const Table: React.FC<TableProps> = ({
  data, 
  columns, 
  title,
  allowActions = true,
  allowDelete = true,
  allowView = true,
  initialColumnVisibility={}
}) => {
  const {colors, shadows, radius, fontFamily} = useTheme()
  const navigate = useNavigate();
  const location = useLocation();

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
        muiTableHeadCellProps={{ sx: { fontWeight: 600} }}
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
              onClick={() => {
                let item = row.original as Equipament
                navigate(
                  '/management/equipament',
                  {state:{from: location, equipament: item, title: item.name}}
                );
              }}
            >
              <HiOutlineEye 
                size={22} 
                color={colors.grey}
                style={{marginRight:5}}
              /> 
              Ver Detalhes
            </MenuItem>
          )
          allowDelete && actionButtons.push(
            <MenuItem
              key={1}
              disableGutters={false}
              onClick={() => {
                closeMenu()
              }}
            >
              <FiTrash2 
                size={22} 
                color={colors.grey} 
                style={{marginRight:5}}
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
                margin: '10px 0',
                fontSize: '18px',
                fontWeight: 600,
              }}
            >
              {title}
            </h4>
          );
        }}
        //setting initial format
        initialState={{
          density: 'compact',
          columnVisibility:initialColumnVisibility
        }}
      />
    </ThemeProvider>
  )
};

export default Table;