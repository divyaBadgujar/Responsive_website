import React from "react";
import {useParams,useLocation,useNavigate } from "react-router-dom";

const User = ()=>{
    const {name,lname}=useParams();
    const Location=useLocation();
    const navigate=useNavigate();
    console.log(Location);
    return (
    <>
    <h1>user {name} {lname} page</h1>
    <p>My Current Location is {Location.pathname}</p>
    {Location.pathname === `/user/divya/badgujar` ? <button onClick={()=>navigate(-1)}>Click Me</button> : null}
    </>
    );
};
export default User;