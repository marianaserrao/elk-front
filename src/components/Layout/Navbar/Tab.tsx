import React, {HTMLAttributes} from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'styled-components';

import { useLocation } from 'react-router-dom';

import { Route } from '../../../routes/interfaces';
import { removeLastBar } from '../../../utils/paths';

import { 
  Tab
} from './styles';

interface TabProps extends HTMLAttributes<HTMLDivElement>{
  route:Route,
  sub?: boolean
}

const Navtab: React.FC<TabProps> = ({route, sub=false}) => {
  const location = useLocation()
  const { colors, opacities, animations, transitions } = useTheme();

  return (
    <Tab to={route.path} state={{from: location}}>
      {route.path===removeLastBar(location.pathname) &&
        <motion.div
            layoutId="background"
            initial={false}
            animate={{ backgroundColor: `${colors.dark}${opacities.twenty}`, borderLeft: `3px solid ${colors.light}${opacities.ninety}` }}
            transition={{ duration: animations.navabar ?  transitions.motionDefault : 0}}
        />
      }
      {sub && <img src={require(`../../../assets/icons/subroute.png`)}  alt={`${route.title} Icon`}/>}
      <img src={require(`../../../assets/icons/${route.icon}`)}  alt={`${route.title} Icon`}/>
      <p>{route.title}</p>
    </Tab>

  );
}

export default Navtab;