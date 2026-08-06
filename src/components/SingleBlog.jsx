// Import necessary modules
"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// Create the SingleBlog component
export default function SingleBlog() {
    // Get the router object
    const router = useRouter();

    // Extract the 'id' from the router query, or set it as an empty string
    const { id = '' } = router.query || {};

    // Initialize state variables for blog data and loading state
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);

    // Define the effect to fetch blog data
    useEffect(() => {

        // Output the 'id' to the console
        console.log("Current ID:", id);
        // Check if 'id' is not an empty string
        if (id) {
            const fetchBlogData = async () => {
                try {
                    // Fetch blog data from the API using the 'id'
                    const res = await fetch(`http://localhost:3000/api/blogs/${id}`);

                    // Check if the response is ok
                    if (!res.ok) {
                        throw new Error("Failed to fetch blog");
                    }

                    // Parse the JSON data from the response
                    const data = await res.json();

                    // Set the blog data and update the loading state
                    setBlog(data);
                } catch (error) {
                    // Log any errors to the console
                    console.error(error);
                } finally {
                    // Set loading to false regardless of success or failure
                    setLoading(false);
                }
            };

            // Invoke the fetchBlogData function
            fetchBlogData();
        }
    }, [id]);

    // Render content based on loading and blog data
    if (loading) {
        return <div>Loading...</div>;
    }

    if (!blog) {
        return <div>Data not available.</div>;
    }

    // Render the blog content if available
    return (
        <>
            <div>
                <h1>{blog.title}</h1>
                <p>{blog.content}</p>
            </div>
        </>
    );
}
