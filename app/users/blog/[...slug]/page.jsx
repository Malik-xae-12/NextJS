const Blog = async({ params }) => {
    const { slug } =await params;

    console.log("slug", slug);

    return (
        <>
            <h1>Slug Page</h1>
            <p>Slug: {slug}</p>
        </>
    );
};

export default Blog;
