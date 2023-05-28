import Dashboard from "../pages/Dashboard";
import Management from "../pages/Management";
import Home from "../pages/Home";
import EquipmentDetail from "../pages/EquipmentDetail";
import PeriodChange from "../pages/Sugestions/PeriodChange";
import TariffChange from "../pages/Sugestions/TariffChange";
import EquipmentChange from "../pages/Sugestions/EquipmentChange";

import { Navigate } from "react-router-dom";
import Sustentability from "../pages/Sustentability";

export const privateRoutes = [
  {
    id: "dashboard",
    path: "/dashboard",
    title: "Dashboard",
    icon: "dashboard.png",
    element: <Dashboard />,
    onNavBar: true,
  },
  {
    id: 'management',
    path: '/management', 
    title: 'Management',
    icon: 'socket.png',
    element:  <Management />,
    onNavBar: true
  },
  {
    id: 'suggestions',
    path: '/suggestions', 
    title: 'Suggestions',
    icon: 'suggestions.png',
    element:   <Navigate to='/suggestions/equipment-change'/>,
    onNavBar: true,
    isToggle: true,
    subRoutes: [3, 4, 5],
  },
  {
    id: 'equipment-suggestions',
    path: '/suggestions/equipment-change', 
    title: 'Equipments',
    icon: 'equipment.png',
    element:  <EquipmentChange />,
  },
  {
    id: 'tarriff-suggestions',
    path: '/suggestions/tariffs', 
    title: 'Tariffs',
    icon: 'eletricity.png',
    element:  <TariffChange/>,
  },
  {
    id: 'period-suggestions',
    path: '/suggestions/usage-period-change', 
    title: 'Period of Usage',
    icon: 'watch.png',
    element:  <PeriodChange />,
  },
  {
    id: 'sustainability',
    path: '/sustainability', 
    title: 'Sustainability',
    icon: 'sustainability.png',
    element:  <Sustentability/>,
    onNavBar: true
  },
  {
    id: "equipment-detail",
    path: "/management/equipment",
    title: "Equipment Details",
    element: <EquipmentDetail />,
  },
];

export const publicRoutes = [
  {
    path: "/",
    title: "Home",
    element: <Home />,
  },
];
