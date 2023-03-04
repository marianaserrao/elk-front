import React from 'react';
import {Outlet} from "react-router-dom"
import Navbar from "./Navbar"
import Home from '../../pages/Home';
const Layout: React.FC = () => {
  const user = true
  return (
    user
    ? (
      <div style={{display:'flex'}}>
        <Navbar/>
        <Outlet/>
      </div>
    )
    : <Home/>
  );
}

export default Layout;