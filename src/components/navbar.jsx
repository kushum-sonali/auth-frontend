import React from "react";
import { useEffect } from "react";
import{Link} from "react-router-dom";
// import SignUp from "./signup";
function Navbar(){
  
    return(
        <>
         <div>
          <nav className="navbar navbar-expand-md  bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand"   href="#"><h3>Navbar</h3></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page"   to="/"><h4>Home</h4></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active"   to="/login"><h4>LogIn</h4></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active"   to="/signup"><h4>Signup</h4></Link>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
      
  

         </div>
        </>
    );
}
export default Navbar;