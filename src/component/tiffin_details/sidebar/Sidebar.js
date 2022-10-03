import React from "react";
import './Sidebar.css';

import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';


function Sidebar() {
    return (
    <>
 <div className="side_bar">
<div className="container">
    <h3 className="category_h3">Category </h3>
    <hr/>
    <p className="category_p">Breakfast</p>
    <p className="category_p">Lunch</p>
    <p className="category_p">Dinner</p>
</div>
 </div>

    </>
    )
}

export default Sidebar;