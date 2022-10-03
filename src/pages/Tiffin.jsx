import React from "react";
import Tiffin_nav from '../component/tiffin_services/tiffin_nav/Tiffin_nav';
// import Bg_Image from '../component/tiffin_services/bg_Image/Bg_Image';
import Vendor_cards from '../component/tiffin_services/vendor_cards/Vendor_cards';
import Filters from '../component/tiffin_services/filters/Filters'
import Offers from '../component/tiffin_services/bg_Image/Offers'

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';


function Tiffin() {
    return (
    <>
    {/* <Tiffin_nav/> */}
    {/* <Bg_Image/> */}
    <div className="offers-bg">
    <Offers/>
    </div>
    <Filters/>


    {/* -----------------------cards section ----------------------------------*/}
<div className="row center" style={{padding:"0 5%"}}>
<div className="col-lg-4 col-md-6 col-sm-12">
    <Vendor_cards
        imgsrc="https://miro.medium.com/max/400/1*x2QA5tpND9FmnilL4r6YOw.jpeg"
        title="Yogi's Kitchen"
        price="Rs. 50 per tiffin"
        rating='4.5' 
    />
    </div>

    <div className="col-lg-4 col-md-6 col-sm-12">
<Vendor_cards
        imgsrc="https://5.imimg.com/data5/MR/NM/MY-53030136/tiffin-service-500x500.jpg"
        title="Bharpet Meals"
        price="Rs. 350 per week"
        rating="4.3 "
    />
    </div>

    <div className="col-lg-4 col-md-6 col-sm-12">
<Vendor_cards
        imgsrc="https://images.jdmagicbox.com/comp/moga/d7/9999p1636.1636.160113153015.u4d7/catalogue/fresh-food-tiffin-service-moga-ho-moga-tiffin-services-34haaw.jpg"
        title="Fresh Food Tiffin Service"
        price="Rs. 45 per tiffin"
        rating="4.2 "
    />
    </div>
</div>


<div className="row center" style={{padding:"0 5%"}}>
<div className="col-lg-4 col-md-6 col-sm-12">
    <Vendor_cards
        imgsrc="https://miro.medium.com/max/400/1*x2QA5tpND9FmnilL4r6YOw.jpeg"
        title="Yogi's Kitchen"
        price="Rs. 50 per tiffin"
        rating='4.5' 
    />
    </div>

    <div className="col-lg-4 col-md-6 col-sm-12">
<Vendor_cards
        imgsrc="https://5.imimg.com/data5/MR/NM/MY-53030136/tiffin-service-500x500.jpg"
        title="Bharpet Meals"
        price="Rs. 350 per week"
        rating="4.3 "
    />
    </div>

    <div className="col-lg-4 col-md-6 col-sm-12">
<Vendor_cards
        imgsrc="https://images.jdmagicbox.com/comp/moga/d7/9999p1636.1636.160113153015.u4d7/catalogue/fresh-food-tiffin-service-moga-ho-moga-tiffin-services-34haaw.jpg"
        title="Fresh Food Tiffin Service"
        price="Rs. 45 per tiffin"
        rating="4.2 "
    />
    </div>
</div>
{/* ---------------------------------------card section ends----------------------------------- */}
   


    </>
    )
}

export default Tiffin