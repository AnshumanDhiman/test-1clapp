import React from "react";
import './servicesSGP.css'
import { MDBCol, MDBContainer, MDBRow} from "mdbreact";
import { Button, Card } from 'react-bootstrap';


const servicesSGP= () => {
    return (
      <div >

       <MDBContainer className="card-serviceSGP" >
        <MDBRow>
        <MDBCol md="4">
 <Card style={{ width: '18rem',height: "30rem", backgroundColor:"#E5E4E2" }}>

  <Card.Body>
    <Card.Title>PLATINUM</Card.Title>
    <Card.Text style={{textAlign:"justify"}}>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
      <br/><br/>
      ❌ CHANGES BY ADMIN
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</MDBCol>
        <MDBCol md="4">
        <Card style={{ width: '18rem' ,height: "30rem", backgroundColor:"#ffd700"}}>
 
  <Card.Body>
    <Card.Title>GOLD</Card.Title>
    <Card.Text style={{textAlign:"justify"}}>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
      <br/><br/>
      ✔️ CHANGES BY ADMIN
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</MDBCol>

<MDBCol md="4">
 <Card style={{ width: '18rem',height: "30rem", backgroundColor:"#C0C0C0" }}>

  <Card.Body>
    <Card.Title>SILVER</Card.Title>
    <Card.Text style={{textAlign:"justify"}}>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
      <br/><br/>
      ❌ CHANGES BY ADMIN
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
  </MDBCol>
        </MDBRow>
      </MDBContainer>
      </div>
    )
}


export default servicesSGP;