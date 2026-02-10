
import { useState } from "react"

const counter = ()=>{
    const [count,setCount] = useState(0);
    return(
        <>
        <h1>counter</h1>
        <button onClick={()=>setCount(count+1)} className="bg-yellow-500 text-white m-2">increment - {count}</button>
        </>
    )
}

export default counter