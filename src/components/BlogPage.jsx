import { useEffect, useState } from "react";
import BlogCards from "./BlogCards";
import Pagination from "./Pagination";
import PageCategory from "./PageCategory";
import Sidebar from "./Sidebar";

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
                <PageCategory onSelectCategory={handleCategoryChange} selectedCategory={selectedCategory} activeCategory={activeCategory} />
            </div>
            <div className="flex flex-col lg:flex-row gap-12">
                <BlogCards blogs={blogs} currentPage={currentPage} selectedCategory={selectedCategory} blogsPerPage={blogsPerPage} />

                <div>
                    <Sidebar />
                </div>
            </div>
            <div>
                <Pagination onPageChange={handlePageChange} currentPage={currentPage} blogs={blogs} blogsPerPage={blogsPerPage} />
            </div>
        </div>
    )
}

export default BlogPage;