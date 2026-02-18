import ProductList from "./ProductList";

const products = async(props)=>{
    const searchParam = await props.searchParams;
    console.log("outer",searchParam)
    const page = searchParam?.page
    return (
        <>
            <h1>Products Page</h1>
            <p>Page Number: {page}</p>
            <ProductList/>
        </>
    )
}

export default products;