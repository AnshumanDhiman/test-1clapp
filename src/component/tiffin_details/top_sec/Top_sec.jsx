import React from "react";
import './Top_sec.css';

import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import StarRateIcon from '@material-ui/icons/StarRate';
import CheckIcon from '@material-ui/icons/Check';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SearchIcon from '@material-ui/icons/Search';




const name = "Yogi's Kitchen"
const location = "Vaishali sec-2, Sahibabad"
const rating ="4.5"
const vegOrNonveg= "Pure Veg"

function Top_sec() {
    return (
    <>
    <div className="top-bg-black">
    <div className="row">
    <div className="col-lg-8">
        <img src="https://4.imimg.com/data4/TV/VH/MY-23210059/veg-tiffin-service-500x500.jpg" className="img-top"/>
        <h2 className="top_h2">{name}</h2>
        <p className="top_loc">{location}</p>

        <h5 className="rate"><StarRateIcon/>Rating</h5>
        <div className="gapline-1"></div>
       <p className="rating">{rating}</p>
      
        <h5 className="pure-veg"><CheckIcon/> {vegOrNonveg}</h5>
        <div className="gapline-2"></div>
      
        <h5 className="hygiene"><DoneAllIcon/> Good Hygiene</h5>
        <div className="gapline-3"></div>      
</div>

<div className="col-lg-4">
    <input placeholder="Search" className="search-2" />
    <button className="search-2-btn"><SearchIcon/>Search</button>
    <button className="fav"><FavoriteIcon/> Favourite</button>
</div>
</div>
    </div>
    </>
    )
}

export default Top_sec;