import React from 'react';
import { 
  Navigate,
  Outlet,
  useLocation
} from 'react-router-dom';

import { useAuth } from '../hooks/auth';

interface RouteProps {
    isPrivate?: boolean;
}

const ProtectAuth: React.FC<RouteProps> = ({ isPrivate = false, ...rest }) => {
    const {user} = useAuth();
    const location = useLocation();
    if (!user === isPrivate){
      return (
        isPrivate
        ? <Navigate to='/home' state={{from: location}} replace/>
        : <Navigate to='/dashboard' state={{from: location}} replace/>
      )
    }
    else return <Outlet/>
}; 

export default ProtectAuth;