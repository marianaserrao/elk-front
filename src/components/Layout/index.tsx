import React from 'react';
import {Outlet} from "react-router-dom"
import { useTheme } from 'styled-components';
import Navbar from "./Navbar"

const Layout: React.FC = () => {
  const user = true
  const {colors} = useTheme()
  return (
    <div style={{display:'flex', minHeight: '100vh', backgroundColor:colors.background}}>
      {user && <Navbar/>}
      <Outlet/>
    </div>
  );
}

export default Layout;