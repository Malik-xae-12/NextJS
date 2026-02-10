const post = async(props)=>{
    console.log(props)
    const post = await props.params
    console.log(post)
    return(
        <>
        <h1>hello {post.username}</h1>
        <p>post id : {post.postid}</p>
        </>
    )
}

export default post