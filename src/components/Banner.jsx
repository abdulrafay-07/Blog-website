import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa6";

const Banner = () => {
    return (
        <div className="px-4 py-32 bg-black mx-auto">
            <div className="text-white text-center">
                <h1 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">Welcome to Stock Blogs</h1>
                <p className="text-gray-300 lg:w-3/5 mx-auto mb-5 font-primary">Start your blog today and join a community of writes and readers who are passionate about sharing their stories and ideas.</p>
                <div>
                    <Link 
                        to="/about" 
                        className="font-medium inline-flex items-center py-1 hover:text-orange-500">
                        Learn more <FaArrowRight className='mt-1 ml-2'/>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Banner;