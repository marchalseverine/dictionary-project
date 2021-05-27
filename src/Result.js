import React from "react";
import Meaning from "./Meaning";

export default function Result (props){
   if (props.result){
    return (
    <div className="result">
        <h1>{props.result.word} </h1>
        <p>
        {props.result.meanings.map(function(meaning, index){
            return (
            <div key={index}>
               <Meaning meaning={meaning} />
            </div>
        );
            })}
        </p>
    </div>
    ) 
    } else {
        return null;
    }
}