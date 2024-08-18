import React from "react";
import './Packages.css';
import { NavLink } from "react-router-dom";
const Packages = () => {
    return(
        <>
        <hr/>
        <div id="packages">
            <center>
            <h1><u>Packages</u></h1>
            
                <div class="row" style={{background: "linear-gradient(grey,white"}}>
                    <div class="col-lg-4 mt-4">
        <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="4000" class="card" style={{width: "18rem"}}>
  <img src="https://video.cgtn.com/news/30677a4e784d544f7845544f784d7a4d32557a4e31457a6333566d54/video/e642a9c48d0f406d9feb0dae1eff41ed/e642a9c48d0f406d9feb0dae1eff41ed-1.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Trip to Paris</h5>
    <p class="card-text"><b>Duration:</b> 7 Days / 6 Nights<br/><b>Accommodation:</b> 4-star hotel in central Paris, within walking distance of major attractions<br/><b>Guided city tour of Paris's amazing location</b></p>
    <button type="button" class="btn btn-warning"><NavLink to="#" class="btn btn-primary">More</NavLink></button>
  </div>
</div>
</div>

<div class="col-lg-4 mt-4">
<div data-aos="flip-up"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="4000" class="card" style={{width: "18rem"}}>
  <img src="https://southafricaliving.com/wp-content/uploads/2020/08/Cape-Town-Travel-Guide-1024x576.png" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Trip to South Africa</h5>
    <p class="card-text"><b>Duration:</b> 10 days/9 nights<br/><b>Accomodation:</b>  4-star hotels in Cape Town, Johannesburg, and Kruger National Park lodges<br/><b>Private safari drives in Kruger National Park</b></p>
    <button type="button" class="btn btn-warning"><NavLink to="#" class="btn btn-primary">More</NavLink></button>
  </div>
</div>
</div>

<div data-aos="flip-right"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="4000" class="col-lg-4 mt-4">
<div class="card" style={{width: "18rem"}}>
  <img src="https://www.tourist-destinations.com/wp-content/uploads/2011/06/I.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Trip to Indonesia</h5>
    <p class="card-text"><b>Duration:</b> 12 Days / 11 Nights<br/><b>Accommodation:</b> 4-star hotels and beach resorts in Bali, Yogyakarta, and Lombok<br/><b>Guided tours and entrance fees to all major attractions</b></p>
    <button type="button" class="btn btn-warning"><NavLink to="#" class="btn btn-primary">More</NavLink></button>
  </div>
</div>
</div>
</div>

<div class="row" style={{background: "linear-gradient(grey,white"}}>
        <div class="col-lg-6 mt-4 p-4">
          <div  class="card">
            <img src="https://wallpapercave.com/wp/wp4641895.jpg" class="card-img-top" alt="..."  style={{height: "300px"}}/>
            <div class="card-body">
              <h5 class="card-title">Trip to London</h5>
              <p class="card-text"><b>Duration:</b> 6 Days / 5 Nights<br/><b>Accommodation:</b> 4-star hotel in central London, close to major attractions<br/><b>Inclusions:</b><br/>
Round-trip international airfare from Mohali<br/>
Daily breakfast at the hotel<br/>
Guided city tour of London</p>
<button type="button" class="btn btn-warning"><NavLink to="#" class="btn btn-primary">More</NavLink></button>
            </div>
          </div>
        </div>
        <div class="col-lg-6 mt-4 p-4">
          <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" class="card">
            <img src="https://i.pinimg.com/originals/c4/00/4d/c4004dd88fbe72d6a9a827c9ead64dd0.jpg" class="card-img-top" alt="..."  style={{height: "300px"}}/>
            <div class="card-body">
              <h5 class="card-title">Trip to Himachal Pradesh</h5>
              <p class="card-text"><b>Duration:</b> 8 Days / 7 Nights<br/>
              <b>Accommodation:</b> 3-4 star hotels and resorts in Shimla, Manali, and Dharamshala<br/>
              <b>Inclusions:</b><br/>
Round-trip transportation from Mohali to Himachal Pradesh<br/>
Daily breakfast and dinner at hotels<br/>
Guided tours of Shimla, Manali, and Dharamshala</p>
<button type="button" class="btn btn-warning"><NavLink to="#" class="btn btn-primary">More</NavLink></button>
            </div>
          </div>
        </div>
      </div>
</center>
</div>
        </>
    )
}
export default Packages;