import React from "react";
import './About.css';
const About = () => {
    return(
        <>
        <hr/>
        <div id="about">
          <center>
        <h1><u>About Us</u></h1>
      <span data-aos="fade-up-left">
        <img src="https://wallpaperaccess.com/full/1534495.jpg" width="800px" className="aboutImg"/></span>
        <p>Welcome to FlyWings, your ultimate travel companion. Whether you're a seasoned traveler or just starting your journey, we're here to inspire, guide, and equip you for all your adventures.

Our mission is to make travel accessible, enjoyable, and memorable for everyone. We believe that exploring new places, cultures, and experiences is one of life's greatest joys. That's why we've created a platform that brings together the best travel tips, destination guides, and resources to help you plan the perfect trip.</p>
        <hr/>
        <div class="row" style={{background: "linear-gradient(grey,white"}}>
          <div data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="300"
     data-aos-offset="0" class="col-lg-8">
            <h2>Our History</h2>
            <p>FlyWings began as a simple idea sparked by a love for travel and a desire to share that passion with others. Founded in [Year of Founding], our journey started with a group of travel enthusiasts who wanted to create a space where fellow adventurers could find reliable, inspiring, and practical travel information.

In the early days, we focused on sharing personal travel stories, tips, and destination guides. As our community grew, so did our vision. We realized that travelers needed more than just information—they needed a trusted companion that could help them plan, navigate, and enjoy their journeys with ease.
Today, FlyWings continues to evolve, helping travelers discover new destinations and create unforgettable memories.</p>
            
          </div>
          <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" class="col-lg-4">
            <img src="https://wallpaperaccess.com/full/1431673.jpg" width="400px"/>
          </div>
        </div>
        <div class="row mt-4" style={{background: "linear-gradient(grey,white"}}>
          <div data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="300"
     data-aos-offset="0" class="col-lg-8">
           <h2>Travelling Record</h2>
           <p>At FlyWings, we celebrate the spirit of adventure and the love for exploration. Our "Traveling Records" section is dedicated to showcasing the incredible journeys and experiences of our community:<br/>

<b>Miles Traveled:</b> Together, our community has traveled over 100000 miles, crossing continents, oceans, and countless borders.<br/>
<b>Countries Visited:</b> From the deserts of Africa to the glaciers of Antarctica, our travelers have explored over 15 countries worldwide.<br/>
<b>Adventure Highlights:</b> From hiking the Inca Trail to diving in the Great Barrier Reef, our users have documented over thousands of unique adventures.<br/>

Join us in making history by sharing your travel experiences and becoming a part of our growing record of global exploration!</p>
</div>
<div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" class="col-lg-4">
  <img src="https://wallpaperaccess.com/full/1534535.jpg" width="400px"/>
</div>
</div>
        </center>
</div>
        </>
    )
}
export default About;
