import React from "react";
import Synonyms from "./Synonyms";


export default function Meaning (props){
 console.log(props.meaning);
    return (
        <div className="meanings">
<h3>{props.meaning.partOfSpeech}</h3>
{props.meaning.definitions.map(function(definition, index){
    return (
        <div key={index}> 
     <p>   
      <strong>Definition:</strong>  {definition.definition}
      <strong>Exemple:</strong> <em> {definition.example} </em>
      <Synonyms synonyms ={definition.synonyms} />
        </p>
        </div>
    )
    
})}
 
</div>
  );
}