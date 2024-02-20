import BlogPage from "../components/BlogPage";

const Blogs = () => {
    return (
        <div>
            <div className="px-4 py-40 bg-black text-center text-white">
                <h2 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">Blogs</h2>
            </div>

            <div className="max-w-7xl mx-auto">
                <BlogPage />
            </div>
        </div>
    )
}

export default Blogs;