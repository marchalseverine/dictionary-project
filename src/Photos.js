import React from "react";
import "./Photos.css";

export default function Photos (props){
   console.log(props.photos);
    
    if (props.photos){
         return (
             <div className="photos shadow">
                 <div className="row">
                 {props.photos.map(function(photo, index){
                     return (
                         <div key ={index} className="col-md-5">
                 <a href ={photo.src.original} target="_blank" rel="noreferrer">
                         <img src= {photo.src.landscape} className="img-fluid" alt=" "/>
                         </a>
                         </div>
                         
                     )
                 })}
             </div>
             </div>
             
         )
    } else {
        return null;
    }

}