"use client"

const clientcomp = ()=>{
    
    return(
        <>
        <h1>i am client</h1>
        <button className="bg-red-500 text-white" onClick={()=>alert("hello")}>click me</button>
        </>
    )
}

export default clientcomp