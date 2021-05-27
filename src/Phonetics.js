import React from "react";
import "./Phonetics.css";

export default function Phonetic (props){
    console.log(props.phonetics);
return (

    <div className="phonetic">
        
        <a href={props.phonetics.audio} rel="noreferrer" target ="_blank" className="btn-phonetic"> Listen </a>
       
      <span className="phonetic-text">  {props.phonetics.text} </span>
 
    </div>
)
}
