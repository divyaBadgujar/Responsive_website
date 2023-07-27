import React from "react";
import Web from "../src/images/2832fb71252497.5bbeed275ae64.gif"
import { NavLink } from "react-router-dom";
import Common from "./Common";
 const Home=()=>{
    return (
        <>
        <Common name="Grow your business with"
                imgsrc={Web}
                visit="/service"
                btname="Get Started"
        />    
        </>
    )
 };
 export default Home;