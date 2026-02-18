const products = async(props)=>{
    const searchParam = await props.searchParams;
    console.log(searchParam)
    const page = searchParam?.page
    console.log(page)
    return (
        <>
            <h1>Products Page</h1>
            <p>Page Number: {page}</p>
        </>
    )
}

export default products;