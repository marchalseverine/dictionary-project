import React from "react";


export default function Phonetic (props){
    console.log(props.phonetics);
return (

    <div className="phonetic">
        <a href={props.phonetics.audio} rel="noreferrer" target ="_blank" className="btn btn-dark shadow"> Listen </a>
        <br />
        {props.phonetics.text}
    </div>
)
}
