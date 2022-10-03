
import Dashboard from "../component/views/Dashboard";
import UserProfile from "../component/views/UserProfile";
import Products from "../component/views/Products";





const dashboardRoutes = [
 
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/products",
    name: "Products",
    icon: "nc-icon nc-notes",
    component: Products,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "User Profile",
    icon: "nc-icon nc-circle-09",
    component: UserProfile,
    layout: "/admin",
  },

 

];

export default dashboardRoutes;
