import React from 'react';
import './Packages.css';
import { HashLink as NavLink } from "react-router-hash-link";
const Contact =() =>{
    const Top = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
  }
    return(
        <>
        <div id='contact' >
        <footer style={{ background: "linear-gradient(blue,black)", color: "white"}}>
          <div class="row m-0">
            <div class="col-lg-12">
              <NavLink href=""><img src="https://www.freepnglogos.com/uploads/whatsapp-png-logo-6.png" alt=""width="5%" style={{marginLeft: "39%"}}/></NavLink>
              <NavLink href=""><img src="https://cdn.icon-icons.com/icons2/1584/PNG/512/3721672-instagram_108066.png" alt="" width="4%"/></NavLink>
              <NavLink href=""><img src="https://www.freepnglogos.com/uploads/twitter-x-logo-png/twitter-x-logo-png-9.png" alt="" width="3%" style={{marginLeft: "2%"}}/></NavLink>
            </div>
          </div>

        <div class="container text-center text-sm-left mt-5">
        <div class="row pt-0">
          <div class="col-lg-3 mt-3">
            <h6>FlyWings</h6>
            <hr/>
            <p>All National and International Tours Are Planned..</p>
          </div>
          <div class="col-lg-3 mt-3">
            <h6>Branches</h6>
            <hr/>
            <p><NavLink to="">Australia</NavLink></p>
            <p><NavLink to="">India</NavLink></p>
            <p><NavLink to="">England</NavLink></p>
          </div>
          <div class="col-lg-3 mt-3">
          <div className="container">
        <h6>Feedback Form</h6>
        <hr/>
        <form action="https://formspree.io/f/mnqewozy" method="post" id='feedback'>
            <label for="name">Enter Your Name:</label>
            <input type="text" id="name" name="name" required/><br/>
            <label for="email">Enter Your E-mail:</label>
            <input type="text" id="email" name="email" required/><br/>
            <label for="message">Share your feedback and help us serve you better..</label>
            <textarea id="message" name="message" rows="1" required></textarea><br/>
            <button type="submit">Submit</button>
        </form>
    </div>
          </div>
          <div class="col-lg-3 mt-3">
            <h6>CONTACT</h6>
            <hr/>
            <p>Booth No.255, opposite cheema hospital, Phase 5, Sector 59, Sahibzada Ajit Singh Nagar, Punjab 160059</p>
            <p>E-mail: sahil14t@gmail.com</p>
            <p>Mob.:1234567890, 0987654321</p>
            
          </div>
        </div>
      </div>
    </footer>
    <div class="footer text-center" style={{ backgroundColor: "black", color: "whitesmoke"}}>
      <p style={{marginBottom: "0"}}>© 2024 Copyright:abcd1a@gmail.com</p>
      <center>
    <button onClick={top} style={{color: 'black'}}>Go to Top</button>
    </center>
    </div>
    </div>
    </>
    )
}
 export default Contact;
