import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useTheme } from 'styled-components';

import {IoIosArrowDown} from "react-icons/io"

import { Route } from '../../../routes/interfaces';

import { 
  Tab, Toggle
} from './styles';

const Navtab: React.FC<{route:Route}> = ({route}) => {
  const { animations, transitions } = useTheme();

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <Toggle onClick={()=>setIsOpen(!isOpen)}>
        <img src={require(`../../../assets/icons/${route.icon}`)}  alt={`${route.title} Icon`}/>
        <p>{route.title}</p>
        <motion.div
            animate={{rotate: isOpen ? 180 : 0}}
            transition={{ duration: animations.navabar ?  transitions.motionDefault : 0}}
            >
          <IoIosArrowDown/>
        </motion.div>
      </Toggle>
      <AnimatePresence>
        {isOpen && 
          <motion.div
            layoutId="toggle-routes"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: animations.navabar ?  transitions.motionDefault : 0}}
          >
            <IoIosArrowDown/>
          </motion.div>
        }
      </AnimatePresence>
    </div>

  );
}

export default Navtab;