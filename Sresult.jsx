import React from "react";
 const Sresult = (props)=>{
    const img=`https://unsplash.com/ ? ${props.name}`;
    return(
        <>
            <div>
                <img  src={img} alt="search"/>
            </div>
        </>
    )
 }
 export default Sresult;