import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import "./Result.css";

export default function Result (props){
    console.log(props.result);
   if (props.result){
    return (
    <div className="result">
        <div className ="word shadow">
        <h1 className="text-capitalize">{props.result.word} </h1>

    {props.result.phonetics.map(function(phonetic, index){
        return (
            <div key ={index}> 
            <Phonetics phonetics={phonetic}/></div>
        )
        
    })}
    </div>


     
        {props.result.meanings.map(function(meaning, index){
            return (
            <div className="meaning shadow mt-5" key={index}>
               <Meaning meaning={meaning} />
            </div>
        );
            })}
      
    </div>
    ) 
    } else {
        return null;
    }
}