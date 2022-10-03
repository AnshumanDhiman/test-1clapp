import React from "react";
import "./MeetTheTeam.css";
import man from "../../resources/man.png"
import food from "../../resources/food4.jpg"
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import { MDBCol, MDBRow,} from "mdbreact";

const MeetTheTeam = () => {
   
    return (
        <>
        <br/>
        <br/>
            
        <br/>
        <br/>
        <h1 style={{textAlign:"center"}}>Meet The Team Behind 1Clapp</h1>
        <br/>
        <br/>
        <div style={{padding:"0  10%"}}>
        <MDBRow >
        <MDBCol lg="3" md="6" sm="12" style={{textAlign:"center"}}>
        <img src={man} alt="" className="image" />
        <br/>
        <br/>
        <h3>Satyanshu Singh</h3>
  
                <p className="p-m-0"z style={{lineHeight: '1.5'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <TwitterIcon className="icon3"/>
        <LinkedInIcon className="icon4" />
            </MDBCol>
            <MDBCol lg="3" md="6" sm="12" style={{textAlign:"center"}}>
            <img src={man} alt="" className="image" />
            <br/>
        <br/>
            <h3>Atul Singh Arjun</h3>
                <p className="p-m-0" style={{lineHeight: '1.5'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <TwitterIcon className="icon3"/>
        <LinkedInIcon className="icon4" />
            </MDBCol>
            <MDBCol lg="3" md="6" sm="12" style={{textAlign:"center"}}>
            <img src={man} alt="" className="image" />
            <br/>
        <br/>
            <h3>Arun</h3>
                <p className="p-m-0" style={{lineHeight: '1.5'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <TwitterIcon className="icon3"/>
        <LinkedInIcon className="icon4" />
            </MDBCol>
            <MDBCol lg="3" md="6" sm="12" style={{textAlign:"center"}}>
            <img src={man} alt="" className="image" />
            <br/>
        <br/>
            <h3>Ashpreet Kaur</h3>
                <p className="p-m-0" style={{lineHeight: '1.5'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <TwitterIcon className="icon3"/>
        <LinkedInIcon className="icon4" />
            </MDBCol>
            </MDBRow>
            <br/>
            <br/>
            <MDBRow >
        <MDBCol lg="3" md="6" sm="12" style={{textAlign:"center"}}>
        <img src={man} alt="" className="image" />
        <br/>
        <br/>
        <h3>Puneet Saini</h3>
                <p className="p-m-0" style={{lineHeight: '1.5'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <TwitterIcon className="icon3"/>
        <LinkedInIcon className="icon4" />
            </MDBCol>
            <MDBCol lg="3" md="6" sm="12" style={{textAlign:"center"}}>
            <img src={man} alt="" className="image" />
            <br/>
        <br/>
            <h3>Anshuman Dhiman</h3>
                <p className="p-m-0" style={{lineHeight: '1.5'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <TwitterIcon className="icon3"/>
        <LinkedInIcon className="icon4" />
            </MDBCol>
            <MDBCol lg="3" md="6" sm="12" style={{textAlign:"center"}}>
            <img src={man} alt="" className="image" />
            <br/>
        <br/>
            <h3>Prashant Sharma</h3>
                <p className="p-m-0" style={{lineHeight: '1.5'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <TwitterIcon className="icon3"/>
        <LinkedInIcon className="icon4" />
            </MDBCol>
            <MDBCol lg="3" md="6" sm="12" style={{textAlign:"center"}}>
            <img src={man} alt="" className="image" />
            <br/>
        <br/>   
            <h3>Harsh Neolia</h3>
                <p className="p-m-0" style={{lineHeight: '1.5'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <TwitterIcon className="icon3"/>
        <LinkedInIcon className="icon4" />
            </MDBCol>
            </MDBRow>
            </div>
       
        </>
    );

}

export default MeetTheTeam;