import React from 'react';
import { 
  Routes as ReactRoutes, 
  Route, 
  Navigate 
} from 'react-router-dom';

import {privateRoutes, publicRoutes} from '../routes/routes'

import Dashboard from '../pages/Dashboard'
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
              <Route key={index} path={`/${route[0]}`} element={route[2]}/>
            ))
          }
        </Route>        
      </Route>

      {/* public routes */}
      <Route element = {<ProtectAuth/>}>
        {
          publicRoutes.map(route=>(
            <Route path={`/${route[0]}`} element={route[2]}/>
          ))}
      </Route>

      {/* catch all for unexisting endpoints */}
      <Route path="*" element={<Navigate to='/home'/>} />
    </ReactRoutes>

    
  );
}

export default Routes;