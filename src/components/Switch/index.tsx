import React, { useCallback, useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import MaterialSwitch, { SwitchProps as MaterialSwitchProps } from '@mui/material/Switch';
import theme from '../../styles/theme'

interface SwitchProps extends MaterialSwitchProps{
  requestFunction: (state:boolean, id:string)=>boolean,
  initialState: boolean,
  itemId: string
}

const {colors} = theme;

const CustomSwitch = styled((props: MaterialSwitchProps) => (
  <MaterialSwitch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,

  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    //on
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      //on->track
      '& + .MuiSwitch-track': {
        backgroundColor: colors.primary,
        opacity: 1,
        border: 0,
      },
      //on+disabled->track
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: colors.primary,
      border: '6px solid #fff',
    },
    //disabled->thumb
    '&.Mui-disabled .MuiSwitch-thumb': {
      color: theme.palette.grey[100],
    },
    //disabled->track
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: 0.7,
    },
  },
  //thumb
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
  },
  //track
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: '#E9E9EA',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));

const Switch: React.FC<SwitchProps>=({itemId, initialState, requestFunction, ...rest }) =>{
  const [switchState, setSwitchState]=useState(initialState)

  const handleChange=useCallback(async ()=>{
    let currentState = await requestFunction(switchState, itemId)
    setSwitchState(currentState)
  },[switchState, itemId, requestFunction])

  useEffect(()=>{
    // switchState.current=initialState
  },[initialState])

  return (
  <CustomSwitch sx={{ m: 1 }} {...rest} checked={switchState} onChange={handleChange}/>
  );
}

export default Switch