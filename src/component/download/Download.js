import React from "react";
import "./Download.css";
import { MDBCol, MDBContainer, MDBRow} from "mdbreact";
import photo from "../../resources/phone.png";
 import AppleImg from '../../resources/apple-logo.png';
import PlaystoreImg from '../../resources/playstore.png';

const Download = () => {
    return (
      <div className="outer-download" >
        <MDBContainer className="padd-download">
        <MDBRow>
          <MDBCol md="8">
          <br/>
          <div className="responsive">
              <h1>Get The 1Clapp App</h1>
              <br/> 
              
              <p style={{fontSize:"1.4rem"}}>Click on the link below and download the 1Clapp app now for exclusive deals.</p>
              <br/>
              <br/>
              
              <h5>Download app from</h5>
              {/* <button className="btn btn-light butn "> <img src={AppleImg} alt="" className="button_img" />APPLE STORE</button> */}
              <button className="btn btn-light butn" style={{borderRadius:"10px"}}>  <img src={PlaystoreImg} alt="" className="button_img " />GOOGLE PLAY </button>
              <button className="btn btn-light butn" style={{borderRadius:"10px"}}>  <img src={AppleImg} alt="" className="button_img " disabled />APPLE STORE</button>
              </div>
          </MDBCol>
          <MDBCol md="4">
          <div className="responsive">
              <img src={photo} alt="phone_image" className="image-phone" />
              </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      </div>
    )
}


export default Download;