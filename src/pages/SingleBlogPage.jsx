import { useLoaderData } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { FaClock } from 'react-icons/fa6';
import Sidebar from "../components/Sidebar";

const SingleBlogPage = () => {
    const data = useLoaderData();
    const {title, image, category, author, published_date, reading_time, content} = data[0];

    return (
        <div>
            <div className="px-4 py-40 bg-black text-center text-white">
                <h2 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">Blog Reading</h2>
            </div>

            <div className="max-w-7xl mx-auto my-12 flex flex-col md:flex-row gap-16">
                <div className="lg:w-3/4 mx-auto">
                    <div>
                        <img src={image} className="w-full mx-auto rounded" />
                    </div>
                    <h2 className="text-3xl font-bold mt-8 mb-4 text-blue-500 cursor-pointer">{title}</h2>
                    <p className="mb-3 text-gray-600">
                        <FaUser className="inline-flex items-center mr-2" />  
                        {author} | {published_date}
                    </p>
                    <p className="mb-3 text-gray-600">
                        <FaClock className="inline-flex items-center mr-2" />  
                        {reading_time}
                    </p>
                    <p className="text-base text-gray-500 mb-6">{content}</p>

                    <div className="text-base text-gray-500 mb-6">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, facere placeat iure tempora natus ipsum cumque nulla voluptatem praesentium atque dignissimos, soluta optio fugit, accusantium corrupti. Recusandae et debitis delectus?</p> <br />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis nihil dolorum illo, asperiores quae neque perspiciatis placeat saepe consequuntur tenetur ad commodi at, itaque facere reiciendis corrupti voluptatem repellendus qui.</p> <br />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident autem animi quos voluptatum reiciendis numquam quidem vitae error quaerat, blanditiis sint maiores sequi voluptate, voluptatibus iste assumenda beatae, architecto deleniti. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, facere placeat iure tempora natus ipsum cumque nulla voluptatem praesentium atque dignissimos, soluta optio fugit, accusantium corrupti. Recusandae et debitis delectus?</p> <br />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis nihil dolorum illo, asperiores quae neque perspiciatis placeat saepe consequuntur tenetur ad commodi at, itaque facere reiciendis corrupti voluptatem repellendus qui. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident autem animi quos voluptatum reiciendis numquam quidem vitae error quaerat, blanditiis sint maiores sequi voluptate, voluptatibus iste assumenda beatae, architecto deleniti.</p>
                    </div>
                </div>

                <div className="lg:w-1/3">
                    <Sidebar />
                </div>
            </div>
        </div>
    )
}

export default SingleBlogPage;