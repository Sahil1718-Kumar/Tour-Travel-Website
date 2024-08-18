import React from "react";
import './Navbar.css';
import { HashLink as NavLink } from "react-router-hash-link";
const Navbar = () => {
  const navItem = document.querySelectorAll('.nav-item');

navItem.forEach(item => {
  item.addEventListener('click', function() {
    navItem.forEach(el => el.classList.remove('active')); 
    this.classList.add('active'); 
  });
});

    return(
      <>


      
        <nav className="navbar navbar-expand-lg bg-light" style={{position:"sticky", top: "1px", zIndex: "3",width: "100%"}}>
  <div className="container-fluid">
    <NavLink className="navbar-brand" href="/"><img src="https://www.pinclipart.com/picdir/big/352-3523121_new-travel-peeps-travel-agency-logo-png-clipart.png" alt="" width="70px" height="60px"/></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="#home"><i class="fa-solid fa-house"></i> Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="#Destination"><i class="fa-solid fa-location-dot"></i> Destinations</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="#packages"><i class="fa-solid fa-money-check-dollar"></i> Packages</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="#about"><i class="fa-solid fa-address-card"></i> About Us</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="#contact"><i class="fa-solid fa-square-phone"></i> Contact</NavLink>
        </li>
      </ul>
    
    </div>
  </div>
</nav>

</>
    )
}
export default Navbar;