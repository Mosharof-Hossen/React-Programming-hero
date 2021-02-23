import React ,{useState} from "react"


function Count (){
    const [count, setstate] = useState(0) 
    const handelIncrease = () =>{
        setstate(count + 1)
    }
    return(
        <div>
            <h1>Count: {count}</h1>
            <button onClick = {()=>setstate(count-1)} style ={{margin:"10px"}}  className = "button">Add 1-</button>
            <button onClick = {handelIncrease} className = "button">Add 1+</button>
        </div>
    )
}
export default Count;