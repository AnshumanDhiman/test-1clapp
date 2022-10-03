/* ---- */


import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
import "./assets/css/demo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import AdminLayout from "./pages/AdminPage";

/* ---- */


import './App.css';
import Navbar from './component/navbar/Navbar.jsx';
import HeroSection from './component/heroSection/HeroSection';
import Services from './component/services/Services';
import Footer from './component/footer/FooterPage'
import ServicePage from './pages/services';
import CarouselImage from './component/carousel/Carousel';
import Login from './pages/login';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import { Redirect } from 'react-router';
import About from './pages/aboutus';
import Home from './pages/home';
import Team from './pages/team';
import Tiffin from './pages/Tiffin';
import SignUp from './pages/signup';
import ServicesSGP from './pages/servicesSGP'
import VendorPanel from './pages/vendorPanel'
import Tiffin_details from './pages/Tiffin_details'
import LoginVendor from './pages/login_vendor.js';
import SignUpVendor from './pages/signup_vendor';

function App() {
  return (
    <>
    <div class="parallax"></div>
      <Navbar />
      {/* <ServicePage /> */}
      <BrowserRouter>
         <Switch>
             {/* <ProtectedRoute path="/login" pathName = "/login" component={Login} /> */}
             {/* <Route exact={true} path="/tiffin" component={() => (<ServicePage Heading = "Tiffin Service" filterBy = {["Pure Veg","Non-Veg","Both"]}/>)}/> */}
             <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
             {/* <Redirect from="/" to="/admin/dashboard" /> */}
             {/* <Route path="/admin/dashboard" component={AdminLayout} /> */}
             <Route path="/LoginVendor" component={LoginVendor} />
             <Route path="/SignUpVendor" component={SignUpVendor} />
             <Route path="/tiffin_details" component={Tiffin_details} />
             <Route path="/vendor_panel" component={VendorPanel} />
             <Route path="/servicesSGP" component={ServicesSGP} />
             <Route path="/login" component={Login} />
             <Route path="/signUp" component={SignUp} />
             <Route path="/tiffin_service" component={Tiffin} />
             <Route path="/about" component={About} />
             <Route path="/team" component={Team} />
             <Route path="/" component={Home} />
             
         </Switch>
     </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
