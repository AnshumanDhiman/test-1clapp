import React from 'react';
import './Tiffin_nav.css';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import clapp from '../../../resources/1_clap_footer.png';
import LocateMeIcon from '@material-ui/icons/LocationSearching';


function Tiffin_nav() {
    return(
        <nav className="navbar navbar-expand-lg navbar-light">
           <div className="container-fluid" 
           style={{height:'4rem', verticalAlign: 'middle'}} >
             <a className="navbar-brand" href="#">
               <img className="logo" src={clapp} alt="" width="140" height="50"/>
             </a>
             <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon "></span>
             </button>
   
             <div className=""> 
             <div className="collapse navbar-collapse" id="navbarSupportedContent">
              
              {/* locate me  */}
              <form class="d-flex">
        <input class="form-contro locate-me" type="search" placeholder="Enter Your Location" aria-label="Search"/>
        <button class="locate-btn" type="submit"><LocateMeIcon/> Locate Me</button>
      </form>
                   <ul className="navbar-nav me-auto mb-2 mb-lg-0 list">

                       <span className="nav-link"><u>| </u></span>

                   <li className="nav-item">
                         <a className="nav-link list-color" href="#">Sign Up</a>
                       </li>

                       <span className="nav-link"><u>|</u></span>

                   <li className="nav-item">
                         <a className="nav-link list-color" href="#">Login</a>
                       </li>

                     </ul>
                  
             </div> 
            </div>
           </div>
         </nav>
       
    )
}

export default Tiffin_nav;