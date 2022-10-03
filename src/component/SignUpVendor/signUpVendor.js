import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import './signUpVendor.css'
import axios from "axios";
import photo from "../../resources/phone.png";
import { Row, Col } from 'react-bootstrap';
import { MDBCol, MDBContainer, MDBRow} from "mdbreact";
import PlaystoreImg from '../../resources/playstore.png';
import AppleImg from '../../resources/apple-logo.png';
import clapp from '../../resources/1_clap_footer.png';

export default function Signup() {
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [cpassword, setcPassword] = useState("");
  const [pincode, setPincode] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await axios.post('http://localhost:5000/api/auth', {email,password});

    if(response.status == 200){
        console.log(response)
        localStorage.setItem("token",JSON.stringify(response.data.token))
    }
  }

  return (


    <MDBContainer>
<br/>
    <br/>
     
    <MDBRow >
    <div style={{textAlign:"center"}}>
    <h1 style={{display:"inline-block"}} >Vendor Sign Up for </h1>
    <img src={clapp} alt="1Clapp_image" width="140" height="50" style={{marginLeft:"10px",marginTop:"-24px"}}  />

    </div>
    <MDBCol md="5" style={{textAlign:"center"}}>
    <br/>
      <br/>
      <br/>
 
    
    <h2>One Stop Solution For Everyone's Needs</h2>
    <br/>
    <div style={{textAlign:"center"}}><img src={photo} alt="phone_image" className="image-phone-login"/></div>
    <br/>
    <button className="btn btn-sm btn-light butn" style={{borderRadius:"10px"}}>  <img src={PlaystoreImg} alt="" className="button_img " />GOOGLE PLAY </button> 
    <button className="btn btn-sm btn-light butn" style={{borderRadius:"10px"}}>  <img src={AppleImg} alt="" className="button_img " />APPLE STORE </button>
    </MDBCol>
   
   
    <MDBCol md="7" >
    <div className="SignUp">
      <Form onSubmit={handleSubmit}>
      <Row className="g-2">
      <Col md>
      <Form.Group size="lg" controlId="fname">
          <Form.Label >First Name</Form.Label>
          <Form.Control
            autoFocus
            type="name"
            value={fname}
            onChange={(e) => setFName(e.target.value)}
          />
          
          </Form.Group>
          </Col>
          <Col md>
          <Form.Group size="lg" controlId="lname">
          <Form.Label >Last Name</Form.Label>
          <Form.Control
            autoFocus
            type="name"
            value={lname}
            onChange={(e) => setLName(e.target.value)}
          />
          </Form.Group>
          </Col>
          </Row>
          <Row className="g-1">
          <Col md>
          <Form.Group size="lg" controlId="address">
          <Form.Label >Address</Form.Label>
          <Form.Control
          as="textarea"
            type="textarea"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          </Form.Group>
          </Col>
          </Row>
          <Row className="g-2">
          <Col md>
          <Form.Group size="lg" controlId="pincode">
          <Form.Label >Pincode</Form.Label>
          <Form.Control
            type="text"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
          />
          </Form.Group>
          </Col>
          <Col md>
          <Form.Group size="lg" controlId="phoneNo">
          <Form.Label >Phone Number</Form.Label>
          <Form.Control
            type="text"
            value={phoneNo}
            onChange={(e) => setPhoneNo(e.target.value)}
          />
          </Form.Group>
          </Col>
          </Row>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
        
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        
          
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            value={cpassword}
            onChange={(e) => setcPassword(e.target.value)}
          />
        </Form.Group>
        <Button size="lg" type="submit" className="btn-warning" disabled={!validateForm()}>
          Register
        </Button>
        <br/>
        <Button size="md" type="submit" className="btn-danger" href="/loginVendor">
          Already Have and Account ? Login
        </Button> 
      </Form>
      </div>
      </MDBCol>
      </MDBRow>
      </MDBContainer>
 
  );
}

