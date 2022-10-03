import React from "react";
import './AboutUs.css'
import { MDBCol, MDBContainer, MDBRow} from "mdbreact";
import Image from "../../resources/food0.jpg"

const AboutUs = () => {
    return (
        <>
        <br/>
        <h2 className="headings-aboutus">Who We Are</h2>
        <MDBContainer>
        <MDBRow >
          <MDBCol md="4" >
          
       <div className="img-center-aboutus"><img src={Image} alt="" className="image-edit-aboutus "  /></div>
       </MDBCol>
          <MDBCol md="8">
 <p className="para"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
 </MDBCol>
 
        <h2 className="headings-aboutus">What We Offer</h2>
        <MDBCol md="8">
        <p className="para"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </MDBCol>
        <MDBCol md="4">
        <div className="img-center-aboutus"><img src={Image} alt="" className="image-edit-aboutus" /></div>
        </MDBCol>
        <h2 className="headings-aboutus heading-introduction-aboutus">Our Introduction</h2>

        </MDBRow>
        </MDBContainer> 
        
        <div className="video">
        <br/>
        <br/>
        <iframe width="1280" height="720" src="https://www.youtube.com/embed/tgbNymZ7vqY" alt="Video" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        </>
        
    )
}

export default AboutUs;