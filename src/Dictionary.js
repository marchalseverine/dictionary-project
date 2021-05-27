import React, {useState} from "react";
import Result from "./Result";
import "./Dictionary.css";
import Photos from "./Photos";
import axios from "axios";

export default function Dictionary (){
    let [keyWord, setKeyWord] = useState (null);
    let [result, setResult] = useState (null);
    let [photos, setPhotos] = useState (null);

    function handleResponse (response){
        console.log(response.data);      
console.log(response.data[0].meanings[0].definitions[0].definition);
        setResult(response.data[0]);
    }

    function search (event){
        event.preventDefault();
        
        function handlePexelsResponse(response){
console.log(response.data);
setPhotos(response.data.photos);
        }

        let apiUrl =`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyWord}`
        axios.get(apiUrl).then(handleResponse);

const pexelsApiKey ="563492ad6f91700001000001ef1f242ed25b40a1aae0fb2214de5ec8";
let pexelsApiUrl =`https://api.pexels.com/v1/search?query=${keyWord}&per_page=2`;
let headers = {"Authorization" : `Bearer ${pexelsApiKey}`};
axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
    }
    function handleKeyWordChange (event){
       setKeyWord (event.target.value);

    }

    return (
        <div className ="dictionary">
<div className="form-box shadow py-5">
<h2>What word do you want to look up?</h2>
            <form className="search-engine" onSubmit ={search}>
                <input type="search" placeholder="Type a word" autoFocus="on" onChange={handleKeyWordChange}/>
                <input type ="submit" value="Search" />
            </form>
            </div>
            <Result result ={result}/>
       <Photos photos={photos} />
        </div>
    )
}