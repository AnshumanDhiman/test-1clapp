import React from 'react';
import "./Photos.css";
import '../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import tiff1 from "../../../../resources/tiff1.jpg"
import tiff2 from "../../../../resources/tiff2.jpeg"
import tiff3 from "../../../../resources/tiff3.jpg"
import tiff4 from "../../../../resources/tiff4.jpg"
import tiff5 from "../../../../resources/tiff5.jpg"
import tiff6 from "../../../../resources/tiff6.jpg"


function Photos() {
    return (
        <>
        <div className="row">
            <div className="col-lg-6 ">
                <img src={tiff1} className="menu_pics"/>
                <img src={tiff2} className="menu_pics"/>
                {/* <img src={tiff3} className="menu_pics"/> */}
           </div>

            <div className="col-lg-6 ">
                <img src={tiff4} className="menu_pics"/>
                <img src={tiff5} className="menu_pics"/>
                {/* <img src={tiff6} className="menu_pics"/> */}
            </div>    
              
            
        </div>
    

        </>
            )
}

export default Photos
