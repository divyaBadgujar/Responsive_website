import React from "react";
import Web from "../src/images/2832fb71252497.5bbeed275ae64.gif"
import { NavLink } from "react-router-dom";
 const Common=(props)=>{
    return (
        <>
        <section id="header" className="d-flex align-items-center mt-100">
            <div className="container-fluid">
                <div className="row mt-100">
                    <div className="col-10 mx-auto">
                    <div className="row">
                        <div className="col-md-6 pt-5pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column mt-10">
                            <h1>
                            {props.name}<strong className="brand-name"> DivyaTechnical</strong>
                            </h1>
                            <h2 className="my-3">
                                We are the team of talanted developer making websites.
                            </h2>
                            <div className="mt-3">
                                <NavLink to={props.visit} className="btn-get-started">{props.btname} </NavLink>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 header-img">
                            <img src={props.imgsrc} className="img_fluid animated" alt="home img"/>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>    
        </>
    )
 };
 export default Common;