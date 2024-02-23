import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6"

const Sidebar = () => {
    const [popularBlogs, setPopularBlogs] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/blogs")
        .then(res => res.json())
        .then(data => setPopularBlogs(data.slice(0, 15)));
    }, [])

    return (
        <div>
            <div>
                <h3 className="text-2xl font-semibold px-4">Latest Blogs</h3>
                <div>
                    {
                        popularBlogs.slice(0, 5).map((blog, index) => 
                            <div key={index} className="my-5 px-4 border-b-2 border-spacing-2">
                                <h4 className="font-medium mb-2">{blog.title}</h4>
                                <Link 
                                    to="/"
                                    className="text-base pb-2 inline-flex items-center py-1 hover:text-orange-500"
                                >
                                    Read more <FaArrowRight className='mt-1 ml-2'/>
                                </Link>
                            </div>
                        )
                    }
                </div>
            </div>

            <div className="mt-16">
                <h3 className="text-2xl font-semibold px-4">Popular Blogs</h3>
                <div>
                    {
                        popularBlogs.slice(6, 10).map((blog, index) => 
                            <div key={index} className="my-5 px-4 border-b-2 border-spacing-2">
                                <h4 className="font-medium mb-2">{blog.title}</h4>
                                <Link 
                                    to="/"
                                    className="text-base pb-2 inline-flex items-center py-1 hover:text-orange-500"
                                >
                                    Read more <FaArrowRight className='mt-1 ml-2'/>
                                </Link>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Sidebar;