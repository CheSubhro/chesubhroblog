import SingleBlog from "@/components/SingleBlog";

const getBlogById = async (id) => {
    try {
        const res = await fetch(`http://localhost:3000/api/blogs/${id}`, {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch blog");
        }

        return res.json();
    } catch (error) {
        console.log(error);
    }
};

export default async function editTopic({ params }) {
    // console.log("Params Object:", params); // Log the entire params object

    const { id } = params;
    const blogData = await getBlogById(id);

    // Check if the blogData is still loading or if there's an error
    if (!blogData) {
        return <div>Loading...</div>;
    }

    // console.log("Fetched Blog Data:", blogData); // Log the fetched blog data

    const { title, content } = blogData.blogs;

    // console.log("Current ID:", id);
    // console.log("Current Title:", title);

    return (
        <>
            {/* <SingleBlog id={id} title={title} content={content} /> */}
            {/* Optionally, display the title directly here */}
            <h1>{title}</h1>
            <h1>{content}</h1>
        </>
    );
}
