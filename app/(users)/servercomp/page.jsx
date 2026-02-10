
const servercomp = async()=>{
    return(
        <>
        <h1>i am server</h1>
        <button className="bg-red-500 text-white" onClick={()=>alert("hello")}>click me</button>
        </>
    )
}

export default servercomp