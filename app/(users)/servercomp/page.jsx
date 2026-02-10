
const servercomp = async()=>{
    const res= await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await res.json()
    console.log(data)
     return(
        <>
        <h1>server comp</h1>
        <ul className="grid grid-cols-4 gap-4">
            {
                data.map((post)=>{
                    return(
                        <li key={post.id}>{post.title}</li>
                    )
                })
            }
        </ul>
        </>
    )
}

export default servercomp