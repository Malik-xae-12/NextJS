"use client"
import { useEffect, useState } from "react"
import Counter from "./counter"


const clientcomp = ()=>{
   const [postData,setPostData] = useState([]);
   const fetchData = async()=>{
        const res= await fetch("https://jsonplaceholder.typicode.com/posts")
        const data = await res.json()
        console.log(data)
        setPostData(data)
    }
    useEffect(()=>{
        fetchData();
    },[])
    return(
        <>
        <h1>i am client</h1>
        <Counter/>
        <button className="bg-red-500 text-white" onClick={()=>alert("hello")}>click me</button>
        <ul className="grid grid-cols-4 gap-4">
            {
                postData.map((post)=>{
                    return(
                        <li key={post.id}>{post.title}</li>
                    )
                })
            }
        </ul>
        </>
    )
}

export default clientcomp