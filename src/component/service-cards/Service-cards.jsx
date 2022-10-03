import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Service-cards.css';


import tiffin from '../../resources/tiffindabba2.jpg';
import food from '../../resources/food2.jpg';


function Service_cards() {
    return(
    <div className="ser">
        <div className="container service_background">

          <div className="row">
            <h1 className=" text-center service-h1">Services</h1>
          </div>

          <div className="row">
   
          <div className="col-lg-6 col-sm-12"> 

            <a href="/tiffin_service" className="card card-service" style={{height:'23.5rem',width:'27rem', margin: '2rem 2rem 2rem 0', color:'black'}}>
              <img src={tiffin} className="card-img-top c-img" alt="Tiffin Service"/>

            <div className="card-body">
              <h4 className="card-title text-center">Tiffin Service</h4>
              <p className="text-center lines" >The feeling of having home made food with love is just unmatchable.</p>
            </div>
            </a>

          </div>  


          <div className="col-lg-6 col-sm-12">
           
          <a className="card card-service" style={{height:'23.5rem', margin:'2rem 0 2rem 2rem'}}>
            <img src={food} className="card-img-top c-img" alt="Food service"/>
          <div className="card-body">
            <h4 className="card-title text-center">Food As Per Your Mood</h4>
            <p className="text-center lines">Get the multiple food options as per your mood.</p>
          </div>
          </a>

          </div>
        
        </div>

      </div>
      </div>
    
    )
}

export default Service_cards;