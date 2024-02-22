import { useEffect, useState } from "react";
import BlogCards from "./BlogCards";
import Pagination from "./Pagination";

const BlogPage = () => {
    const [blogs, setBlogs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [activeCategory, setActiveCategory] = useState(null);
    
    const blogsPerPage = 12;

    useEffect(() => {
        async function fetchBlogs() {
            let url = `http://localhost:5000/blogs`;

            if (selectedCategory) {
                url += `$category=${selectedCategory}`
            }

            const response = await fetch(url);
            const data = await response.json();
            setBlogs(data);
        }

        fetchBlogs();
    }, [currentPage, blogsPerPage, selectedCategory]);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setCurrentPage(1);
        setActiveCategory(category);
    }

    return (
        <div>
            <div>
                Page Category
            </div>
            <div>
                <BlogCards blogs={blogs} currentPage={currentPage} selectedCategory={selectedCategory} blogsPerPage={blogsPerPage} />
            </div>
            <div>
                <Pagination onPageChange={handlePageChange} currentPage={currentPage} blogs={blogs} blogsPerPage={blogsPerPage} />
            </div>
        </div>
    )
}

export default BlogPage;