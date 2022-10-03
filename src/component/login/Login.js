import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import axios from "axios";
import clapp from '../../resources/1_clap_footer.png';
import { MDBCol, MDBContainer, MDBRow} from "mdbreact";
import photo from "../../resources/phone.png";
import PlaystoreImg from '../../resources/playstore.png';
import AppleImg from '../../resources/apple-logo.png';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
    <div>
    <MDBContainer>
    <MDBRow >
    <MDBCol md="2" style={{textAlign:"center"}}>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    <h5>Download the 1Clapp App</h5>
    <button className="btn btn-sm btn-light butn" style={{borderRadius:"10px"}}>  <img src={PlaystoreImg} alt="" className="button_img " />GOOGLE PLAY </button> 
    <button className="btn btn-sm btn-light butn" style={{borderRadius:"10px"}}>  <img src={AppleImg} alt="" className="button_img " />APPLE STORE </button>
    </MDBCol>
      <MDBCol md="3" >
      <br/>
      <br/>
      <br/>
      <br/>
      <div style={{textAlign:"right"}}><img src={photo} alt="phone_image" className="image-phone-login"/></div>
       </MDBCol>
          <MDBCol md="7">
    <div className="Login">
     <h1>Login</h1>

      <Form onSubmit={handleSubmit} style={{borderRadius:"3%"}}>
      <div style={{textAlign:"center"}}>
      <img src={clapp} alt="1Clapp_image" width="140" height="50"/>
      </div>  
    
      <br/>
        <Form.Group size="lg" controlId="email" >
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
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
        <Button block size="md " type="submit" disabled={!validateForm()} className="btn btn-warning">
          Login
        </Button>
        <a href="/signup">Forgot Password ?</a>
        <br/>
        <hr/>
        <div><h6>Dont have an account? <a href="/signup">Sign Up</a></h6> </div>
      </Form>
 
    </div>
    </MDBCol>
    </MDBRow>
    </MDBContainer>
    </div>
  );
}