import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
const Logout=()=>{

    

    useEffect(()=>{
        localStorage.removeItem("token");
    localStorage.removeItem("email");
       
            
        
    })
     Navigate("/login")
     console.log("kl")
    return (
        <></>
    )
}

export default Logout;