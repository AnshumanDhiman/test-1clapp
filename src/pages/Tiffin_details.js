import React, {useState} from "react";
import Tiffin_nav from '../component/tiffin_services/tiffin_nav/Tiffin_nav';
import Top_sec from '../component/tiffin_details/top_sec/Top_sec';
import Button_options from '../component/tiffin_details/button_options/Button_options';
import Sidebar from '../component/tiffin_details/sidebar/Sidebar';
import Cart from '../component/tiffin_details/cart/Cart';
import Menu from '../component/tiffin_details/menu/Menu';
import Menu_data from '../component/tiffin_details/menu/Menu_data';


import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';


function Tiffin_details() {
    const [type, settype] = useState(<Menu_data/>)
    function onClick(value) {
        settype(value)
    }
    return (
    <>
    {/* <Tiffin_nav/> */}
    <Top_sec/>
    <Button_options typef={onClick} />

    <div className="row lower_sec">
    <div className="col-lg-2 col-md-2 col-sm-2">
        <Sidebar/>
    </div>

    <div className="col-lg-7 col-md-6 col-sm-6">
        <Menu type={type}/>
    </div>

    <div className="col-lg-3 col-md-4 col-sm-4">
        <Cart/>
    </div>

    </div>

    </>
    )
}

export default Tiffin_details