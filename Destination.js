import React, { useEffect } from 'react';
import './Packages.css';

import 'aos/dist/aos.css';
import Aos from 'aos';
const Destination = () => {
  useEffect(()=>{
    Aos.init();
  }, [])
    return(
        <>
        <hr/>
        <div id='Destination'>
          <center>
        <h1><u>Popular Destinations</u></h1>
        <p>Tours give you the opportunity to see a lot, within a time frame</p>
       
        <div class="row" style={{background: "linear-gradient(grey,white"}}>
        <div data-aos="fade-up-left" class="col-lg-6 mt-4">
        <h2>Taal Volcano, Batangas</h2>
        <p>
        Taal Volcano, located in Batangas province on the island of Luzon in the Philippines, is one of the country’s most active and picturesque volcanoes. It sits within Taal Lake, creating a unique and stunning landscape where a volcano is situated within a lake, which is itself situated within a caldera formed by a previous eruption.<br/>

Taal is known for its impressive volcanic features and frequent activity. The volcano has a complex history of eruptions, with its most recent significant eruption occurring in January 2020. Taal’s eruptions are often characterized by explosive activity, ash falls, and lava fountains.</p>
        </div>
        <div data-aos="fade-up-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" class="col-lg-6 mt-4">
        <img src='https://th.bing.com/th/id/OIP.m2rMuPs9na9QnfFiF6ZX5wHaEW?rs=1&pid=ImgDetMain' width="400px"/>
        </div>
        </div>
        <hr/>
        <div class="row" style={{background: "linear-gradient(grey,white"}}>
        <div data-aos="fade-up-right" class="col-lg-4 mt-4">
        <img src='https://www.holidify.com/images/cmsuploads/compressed/Elephant_Falls_II_20180115143935.jpg' width="400px"/>
        </div>
        <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" class="col-lg-8 mt-4">
        <h2>Elephant Falls, Shilong</h2>
        <p>Elephant Falls, located in Shillong, the capital city of the Indian state of Meghalaya, is one of the most famous and picturesque waterfalls in the region. The falls are named "Elephant Falls" because of a rock formation at the base of the falls that was believed to resemble an elephant, though it has since eroded away.<br/>

The waterfall is situated about 12 kilometers from Shillong and is a popular attraction due to its natural beauty and the serene environment surrounding it. The falls cascade down in three distinct steps, creating a stunning visual effect as the water tumbles over the rocky cliffs.<br/>
The region’s unique terrain and climate contribute to the lush and vibrant environment around Elephant Falls, making it a must-visit destination for those exploring Shillong and its surroundings.</p>
        </div>
        </div> 
        
</center>
</div>
        </>
    )
}
export default Destination;

