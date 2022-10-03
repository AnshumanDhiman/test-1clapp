import React from 'react';
import './Filters.css';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

import FavoriteIcon from '@material-ui/icons/Favorite';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';


import SearchIcon from '@material-ui/icons/Search';
{/* <FilterListIcon style={{color:"green"}} /> */}

const Filters= () => {
    return(
        <>
        <div className="filter_bg">
        <br/>
<ul class="nav justify-content-center">
  <li class="nav-item">
    <a class="nav-link filter_btns" aria-current="page" href="#">
    {/* <i class="bi bi-filter-circle-fill"></i> */}
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" style={{color:'blue', margin:'5px'}} fill="currentColor" class="bi bi-filter-circle-fill" viewBox="0 0 16 16">
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM3.5 5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1zM5 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm2 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z"/>
</svg>
     Filters</a>
  </li>
  <li class="nav-item">
    <a class="nav-link filter_btns" href="#"><LocalOfferIcon style={{color:'orange'}}/> Offers</a>
  </li>
  <li class="nav-item">
    <a class="nav-link filter_btns" href="#"><FavoriteIcon color="secondary"/> Favourites</a>
  </li>

  <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search for Tiffin Providers" style={{width:'15em'}} aria-label="Search"/>
      <button class="btn btn-sm btn-success search_btn" type="submit"><SearchIcon/>Search</button>
    </form>
 
</ul>
{/* <hr className="filter_hr"/> */}
<br/>
</div>


<h1 className="head">Tiffin Providers near you</h1>

        </>
    )
}

export default Filters