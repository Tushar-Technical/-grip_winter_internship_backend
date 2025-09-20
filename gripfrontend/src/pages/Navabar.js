import React,{useEffect, useState} from "react";
import {Link} from "react-router-dom";
  import "../css/navbar.css";
  import { Navigate } from "react-router-dom";
// import { Link } from "react-router-dom";

const Navbar=()=>{

  const [login,setlogin]=useState("login")


  const Logout=()=>{

    

        localStorage.removeItem("token");
    localStorage.removeItem("email");

  window.location.reload();
 
   
}





  return (
    <nav className="navbar">
      <div className="navbar-logo">InvestMate</div>
      <ul className="navbar-links">
        <li><Link to="/home">Home</Link></li>


    
         {localStorage.getItem("email") ? <li >
        <Link >{localStorage.getItem("email")}</Link>
      </li> : <li>
        <Link  to="/login">login</Link>
     </li>}


        
         {localStorage.getItem("email") ? null : <li>
         <Link to="/signup">signup</Link>
     </li>}
        <li><Link to="" onClick={Logout}>Logout</Link></li>
        <li><Link to="/admin">Admin List Product</Link></li>
        <li><Link to="/adminupdate">Admin Update Product</Link></li>
        <li><Link to="/deletelisting">Admin delete Listing</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;

        
       
  
