import React from 'react';
import { 
  Routes as ReactRoutes, 
  Route, 
  Navigate 
} from 'react-router-dom';

import {privateRoutes, publicRoutes} from '../routes/routes'

import Layout from '../components/Layout';
import ProtectAuth from './ProtectAuth';

const Routes: React.FC = () => {
  return (
    <ReactRoutes>
      <Route element={<Layout/>}>
        {/* private routes */}
        <Route element = {<ProtectAuth isPrivate/>}>
          {
            privateRoutes.map((route, index)=>(
              <Route key={index} path={route.path} element={route.element}/>
            ))
          }
        </Route>        
      </Route>

      {/* public routes */}
      <Route element = {<ProtectAuth/>}>
        {
          publicRoutes.map((route, index)=>(
            <Route key={index} path={route.path} element={route.element}/>
          ))}
      </Route>

      {/* catch all for unexisting endpoints */}
      <Route path="/*" element={<Navigate to='/'/>} />
    </ReactRoutes>

    
  );
}

export default Routes;