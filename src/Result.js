import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";

export default function Result (props){
    console.log(props.result);
   if (props.result){
    return (
    <div className="result">
        <h1>{props.result.word} </h1>

    {props.result.phonetics.map(function(phonetic, index){
        return (
            <div key ={index}> 
            <Phonetics phonetics={phonetic}/></div>
        )
    })}


     
        {props.result.meanings.map(function(meaning, index){
            return (
            <div key={index}>
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