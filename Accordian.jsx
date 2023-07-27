import React, { useState } from "react";
import { questions } from "./api ";
import MyAccor from './MyAccor'
import { Margin } from "@mui/icons-material";

const Accordian=()=>{
    const[data,setData]=useState(questions);
    return(
    <>
    <section style={{alignItems:"center",margin:'center'}}>
    <h1>React Interview Questions</h1>
        {
            data.map((curElem)=>{
                const{id}=curElem;
                return <MyAccor key={id}{...curElem} />;
            })
        }
        </section>
    </>
    );
};
export default Accordian;