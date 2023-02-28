import React from 'react';
import {Outlet} from "react-router-dom"
import Menu from "./Menu"

const Layout: React.FC = () => {
  const user = true
  return (
    user
    ? (
      <div style={{display:'flex'}}>
        <Menu/>
        <Outlet/>
      </div>
    )
    : <Outlet/>
  );
}

export default Layout;