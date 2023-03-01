import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'styled-components';

import { useLocation } from 'react-router-dom';

import { Route } from '../../../routes/interfaces';

import { 
  Tab
} from './styles';

const Navtab: React.FC<{route:Route}> = ({route}) => {
  const location = useLocation()
  const { colors, opacities } = useTheme();

  return (
    <Tab to={`/${route[0]}`} state={{from: location}}>
      {`/${route[0]}`===location.pathname &&
        <motion.div
            layoutId="background"
            initial={false}
            animate={{ backgroundColor: `${colors.light}${opacities.twenty}`, borderLeft: `3px solid ${colors.light}${opacities.ninety}` }}
            transition={{ duration: 0.8 }}
        />
      }
      <img src={require(`../../../assets/icons/${route[0]}.png`)}/>
      <p>{route[1]}</p>
    </Tab>

  );
}

export default Navtab;