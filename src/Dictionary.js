import React, {useState} from "react";
import Result from "./Result";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary (){
    let [keyWord, setKeyWord] = useState (null);
    let [result, setResult] = useState (null);

    function handleResponse (response){
        console.log(response.data[0]);      
console.log(response.data[0].meanings[0].definitions[0].definition);
        setResult(response.data[0]);
    }

    function search (event){
        event.preventDefault();
        

        let apiUrl =`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyWord}`
        axios.get(apiUrl).then(handleResponse);
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
            <Result result ={result}/>
        </div>
    )
}