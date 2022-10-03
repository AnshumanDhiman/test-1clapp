import React from 'react';
import './Vendor_cards.css';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

import StarRateIcon from '@material-ui/icons/StarRate';


const Vendor_cards = (props) => {
    return(
        <>
<a href="/tiffin_details" className="card-link">
    <div className="card vendor_cards">
  <img src={props.imgsrc} className="card-img-top img-size" alt="image" loading="lazy"/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.price}</p>
    <div className="rate-btn">{props.rating} <StarRateIcon/></div>
  </div>
</div>
</a>

        </>
    )
}

export default Vendor_cards