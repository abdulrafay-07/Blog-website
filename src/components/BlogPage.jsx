import { useEffect, useState } from "react";
import blogsData from "../api/blogsData.json";
import BlogCards from "./BlogCards";

const BlogPage = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        setBlogs(blogsData);
    }, []);

    return (
        <div>
            <div>
                Page Category
            </div>
            <div>
                <BlogCards blogs={blogs}/>
            </div>
            <div>
                Pagination
            </div>
        </div>
    )
}

export default BlogPage;