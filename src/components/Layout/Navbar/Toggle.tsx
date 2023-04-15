import React, { useCallback, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useTheme } from 'styled-components';

import {IoIosArrowDown} from "react-icons/io"

import { Route } from '../../../routes/interfaces';
import { privateRoutes } from '../../../routes/routes';

import { 
  ToggleContainer
} from './styles';
import Navtab from './Tab';

const Toggle: React.FC<{route:Route}> = ({route}) => {
  const { animations, transitions } = useTheme();

  const [isOpen, setIsOpen] = useState(true)

  const handleClick = useCallback((e: any)=>{
    e.preventDefault();
    setIsOpen(!isOpen)
  },[setIsOpen, isOpen])

  return (
    <div>
      <ToggleContainer onClick={handleClick}>
        <img src={require(`../../../assets/icons/${route.icon}`)}  alt={`${route.title} Icon`}/>
        <p>{route.title}</p>
        <motion.div
            animate={{rotate: isOpen ? 180 : 0}}
            transition={{ duration: animations.navabar ?  transitions.motionDefault : 0}}
            >
          <IoIosArrowDown/>
        </motion.div>
      </ToggleContainer>
      <AnimatePresence>
        {isOpen && 
          <motion.div
            layoutId="toggle-routes"
            initial={{ height: 0, opacity:0 }}
            animate={{ height: 'fit-content', opacity:1 }}
            exit={{ height: 0, opacity:0 }}
            transition={{ duration: animations.navabar ?  transitions.motionDefault : 0}}
          >
            {
              route.subRoutes?.map((subRouteIndex)=>(
                <Navtab key={subRouteIndex} route={{onNavBar:true,...privateRoutes[subRouteIndex]}} sub={true}/>
              ))
            }
          </motion.div>
        }
      </AnimatePresence>
    </div>

  );
}

export default Toggle;