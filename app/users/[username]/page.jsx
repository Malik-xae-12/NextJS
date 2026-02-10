const user = async(props)=>{
    console.log(props)
    const user = await props.params
    console.log(user)
    return(
        <>
        <h1>hello {user.username}</h1>
        </>
    )
}

export default user 