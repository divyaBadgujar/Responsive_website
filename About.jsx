import React from "react";
import Web from "../src/images/2832fb71252497.5bbeed275ae64.gif"
import { NavLink } from "react-router-dom";
import Common from "./Common";
 const About=()=>{
    return (
        <>
        <Common
            name="Welcome to About page"
                imgsrc={Web}
                visit="/contact"
                btname="Contact Us"
        />   
        </>
    )
 };
 export default About;