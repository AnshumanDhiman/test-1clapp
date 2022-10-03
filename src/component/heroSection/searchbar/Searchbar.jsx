import React from 'react';
// import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import './Searchbar.css';


function Searchbar() {
    return (
        <div class="wrap">
        <div class="search">
           <input type="text" class="searchTerm" placeholder="Enter your location..."/>
           <button type="submit" class="searchButton">
             {/* <i class="fa fa-search"></i> */}
             <i class="fas fa-map-marker-alt"></i>
             <span class="locate"> Locate me</span>
          </button>
        </div>
     </div>
    )
}

export default Searchbar;