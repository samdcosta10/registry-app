import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

export default function Registry(){

    const [registryData, setRegistryData] = useState([])
    const [textInput, setTextInput] = useState("")
    const [error, setError] = useState(false)

    const addItem = (e) => {
        e.preventDefault();
        if(error)return;

        const tempData = [...registryData];
        tempData.push(textInput)
        setRegistryData(tempData)
        setTextInput("")
    }

    useEffect(()=>{
        if(textInput.length>10)
        setError(true);
        else setError(false)
    },[textInput])

    const removeItem = (index) =>{
        let newData = [...registryData]
        newData.splice(index,1)
        setRegistryData(newData)
    }

    const editItem = (index) =>{
        if(error)return;

        let newData = [...registryData]
        newData[index] = textInput;
        setRegistryData(newData)

    }

    return(
        <div>
            <h1>Welcome to Registry</h1>
            <form onSubmit={addItem}>
            <input type="text" value={textInput} onChange={(e)=> setTextInput(e.target.value)}/>
            <br></br>
            {error ?<span style={{color:"red"}}>Error occured</span>: null}
            <br></br>
            <input value='Submit' type="submit" />
            </form>      
            <br></br>
           {registryData.map((item, index)=>{
            return(
                <li key={index}>{item} 
                <button onClick={()=>removeItem(index)}>Remove</button>
                <button onClick={()=>editItem(index)}>Update</button>
                </li>
            )
           })}
            <br></br>
            <br></br>
            <Link to="/">Go to home</Link>
        </div>
    )
}