const DataFetchServer = async(props) => {
    const searchParams = await props.searchParams;
    const username = searchParams?.name;
    console.log("username",username)
    if (!username || username.length === 0 ) {
        return (
            <>
                <h1>Data Fetch Server</h1>
                <p>Name is required</p>
            </>
        )
    }
    const res = await fetch(`https://api.genderize.io/?name=${username}`)
    const data = await res.json()
    console.log("data",data)
    return (
        <>
            <h1>Data Fetch Server</h1>
            <p>Name: {username}</p>
            <p>Gender: {data.gender}</p>
            <p>Probability: {data.probability}</p>
            <p>Count: {data.count}</p>
        </>
    )
}

export default DataFetchServer;