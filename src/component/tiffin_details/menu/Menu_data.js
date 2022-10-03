import React, {useState} from "react";
import './Menu.css';
import AddIcon from '@material-ui/icons/Add';
import Photos from '../menu/photos/Photos'


import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';


function Menu(props) {
 
    return (
    <>
    {/* {props.type == 'pending'?<Photos/>: props.type} */}

    
 {/* <div className="menu_bar">
<div className="container">
    <h3 className="menu_h3" style={{margin:'1.2rem 0', textAlign:'center', fontWeight:'500'}}>Menu </h3>
    <hr/> */}

{/* ===================================================================================================== */}
<div className="accordion" id="accordionPanelsStayOpenExample">

  <div className="accordion-item">
    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        Package 1
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
      <div className="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
     <button className="btn btn-success btn-sm" style={{ margin:'0 1rem 1rem 1rem', padding:'3px 8px 3px 5px', float:'right'}}><AddIcon/> Add Ons</button>
      </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
      <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="true" aria-controls="panelsStayOpen-collapseTwo">
      Package 2
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
      <div className="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
     <button className="btn btn-success btn-sm" style={{ margin:'0 1rem 1rem 1rem', padding:'3px 8px 3px 5px', float:'right'}}><AddIcon/> Add Ons</button>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
      Package 3
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
     <button className="btn btn-success btn-sm" style={{ margin:'0 1rem 1rem 1rem', padding:'3px 8px 3px 5px', float:'right'}}><AddIcon/> Add Ons</button>
      </div>
    </div>
  </div>
</div>

   {/* ---------------------------------- */}
   {/* </div>
 </div> */}

    </>
    )
}

export default Menu;