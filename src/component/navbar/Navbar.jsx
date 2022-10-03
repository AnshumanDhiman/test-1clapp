import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import './Navbar.css';
// import clapp from '../../resources/1_clapp.png';
import clapp from '../../resources/1_clap_footer.png';


function Navbar() {
    return(
        <nav className="navbar navbar-expand-lg navbar-light">
           <div className="container-fluid" 
           style={{height:'4rem', verticalAlign: 'middle'}} >
             <a className="navbar-brand" href="/">
               <img src={clapp} alt="" width="140" height="50"/>
             </a>
             <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon "></span>
             </button>
   
             <div className="">
             <div className="collapse navbar-collapse" id="navbarSupportedContent">
              
              
                   <ul className="navbar-nav me-auto mb-2 mb-lg-0 list">
                      
                    
                   <li className="nav-item">
                         <a className="nav-link list-color" href="signupVendor">Work with Us</a>
                       </li>

                       <span className="nav-link"><u>|</u></span>

                   <li className="nav-item">
                         <a className="nav-link list-color" href="/signUp">Sign Up</a>
                       </li>

                       <span className="nav-link"><u>|</u></span>

                   <li className="nav-item">
                         <a className="nav-link list-color" href="/login">Login</a>
                       </li>

                     </ul>
                  

             </div> 
            </div>
           </div>
         </nav>
       
    )
}

export default Navbar;