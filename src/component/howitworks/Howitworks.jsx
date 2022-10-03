import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Howitworks.css';

import how1 from '../../resources/Search2.gif';
import how2 from '../../resources/Choice.gif';
import how3 from '../../resources/Select2.gif';
import how4 from '../../resources/Done.gif';


function Howitworks() {
    return(
    
        <div className="container howbox">

        <div className="row"> 
        <a >
        <h1 className="text-center heading" style={{marginBottom:'3rem'}}>How It Works</h1>
        </a>
        </div>

        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12"> 
          <img src={how1} className="howimg text-cente" alt="Search for your desired service"/>
          <h4 className="text-cente">Search</h4>
          <p class="text-cente content">Search the services you are looking for.</p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12"> 
          <img src={how2} className="howimg text-cente" alt="Find the perfect vendor"/>
          <h4 className="text-cente">Compare</h4>
          <p class="text-cente content">Compare the prices, to get a better deal at an affordable price.</p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12"> 
          <img src={how3} className="howimg text-cente" alt="Compare services"/>
          <h4 className="text-cente">Select</h4>
          <p class="text-cente content">Select the Service Provider near you, as per your demand.</p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12"> 
          <img src={how4} className="howimg text-cente" alt="Book your Service"/>
          <h4 className="text-cente">Book</h4>
          <p class="text-cente content">After selecting just give a click to book your order.</p>
          </div>
        </div>

      </div>  //container div


   )
}

export default Howitworks;