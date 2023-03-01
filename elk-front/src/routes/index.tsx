import React from 'react';
import { 
  Routes as ReactRoutes, 
  Route, 
  Navigate 
} from 'react-router-dom';

import {privateRoutes} from '../routes/routes'

import Dashboard from '../pages/Dashboard'
import Layout from '../components/Layout';
import ProtectAuth from './ProtectAuth';

const Routes: React.FC = () => {
  return (
    <ReactRoutes>
      <Route path='/' element={<Layout/>}>
        {/* private routes */}
        <Route element = {<ProtectAuth isPrivate/>}>
          {
            privateRoutes.map(route=>(
              <Route path={`/${route[0]}`} element={route[2]}/>
            ))
          }
        </Route>

        {/* public routes */}
        <Route element = {<ProtectAuth/>}>
          <Route path="/login" element={<Dashboard/>} />
        </Route>

        {/* catch all for unexisting endpoints */}
        <Route path="*" element={<Navigate to='/login'/>} />
      </Route>
    </ReactRoutes>
  );
}

export default Routes;