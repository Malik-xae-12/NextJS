"use client";
import { useSearchParams } from "next/navigation";

const ProductList = () => {
    const searchParams = useSearchParams();
    console.log("inner",searchParams.getAll("page"));
    console.log("inner",searchParams.get("category"));
    return (
        <>
            <h1>Product List</h1>
        </>
    )
}

export default ProductList;