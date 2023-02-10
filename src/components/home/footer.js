import React from "react";
import "../../assets/Footer.css"

export function Footer() {
  return (
   <div className="footer">
    <div className="para1">
    <p style = {{"fontSize":"2.2rem" , "marginTop" : "40px"}}>Subscribe to our newsletter</p>
    </div>
     <div className="para2">
    <p style = {{"fontSize":"1.2rem" , "marginTop" : "40px"}}>
    Email address*
    </p>
    <input placeholder="Enter Your Email"/>
    
     </div>
   </div>
  );
}