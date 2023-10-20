import { useEffect } from "react";
import Books from "./books";
import axios from "axios";//axios import, use npm install axios in cmd prompt
import { useState } from "react";

function Read(){
//empty array - data = empty array
    const [data, setData] = useState([]);//use state imported, data, setData = useState.


    useEffect(//reacthook, sync with external system.
     ()=>{
    axios.get('https://jsonblob.com/api/jsonblob/1161593332966481920')//axios imported, getting api request, axios is a promised based http client.
    .then(
        (response)=>{//calling the response.
         setData(response.data.books);//setdata = response.data.books, only pulling part of the data with .books
        }//call back function
    )
    .catch(
        (error)=>{
            console.log(error);//logs error if response doesnt work.
        }//call back function
    )
     },[]   
    );
    
               

    return(
        <div>
            <h2>Hello from the read component</h2>
           <Books myBooks={data}></Books> {/* book data added to myBooks array*/}
        </div>
    );
}
export default Read;