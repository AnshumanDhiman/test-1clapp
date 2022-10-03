import React from "react";
import './Button_options.css';
import Photos from '../menu/photos/Photos'
import Menu_data from '../../../component/tiffin_details/menu/Menu_data';



import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import TodayIcon from '@material-ui/icons/Today';
import DescriptionSharpIcon from '@material-ui/icons/DescriptionSharp';
import CardGiftcardSharpIcon from '@material-ui/icons/CardGiftcardSharp';



function Button_options(props) {
    return (
    <>

<nav aria-label="breadcrumb options_nav">
  <ol class="breadcrumb">
    <li class="breadcrumb-item options_hov" onClick={() =>props.typef("overview will be avalaible soon") }><DescriptionSharpIcon/> Overview</li><span className="options_vr"> | </span>
    <li class="breadcrumb-item options_hov" onClick={() =>props.typef(<Photos/>) }><PhotoLibraryIcon/> Photos</li><span className="options_vr"> | </span>
    <li class="breadcrumb-item options_hov" onClick={() =>props.typef("order_now will be avalaible soon") }><TodayIcon/> Order for Today</li><span className="options_vr"> | </span>
    <li class="breadcrumb-item options_hov" onClick={() =>props.typef(<Menu_data/>) }><CardGiftcardSharpIcon/>Packages</li>
  </ol>
</nav>
    </>
    )
}

export default Button_options;