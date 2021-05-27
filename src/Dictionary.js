import React, {useState} from "react";
import "./Dictionary.css";

export default function Dictionary (){
    let [keyWord, setKeyWord] = useState (null);
    function search (event){
        event.preventDefault();
        alert (`Searching for ${keyWord} definition...`)
    }
    function handleKeyWordChange (event){
       setKeyWord (event.target.value);

    }

    return (
        <div>
            <form className="search-engine" onSubmit ={search}>
                <input type="search" placeholder="Type a word" autoFocus="on" onChange={handleKeyWordChange}/>
                <input type ="submit" value="Search" />
            </form>
        </div>
    )
}