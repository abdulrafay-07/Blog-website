const Footer = () => {
    return (
        <div className="bg-gray-900">
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-4">
                <div className="grid lg:grid-cols-6">
                    <div className="grid grid-cols-2 gap-5 md:grid-cols-4 lg:col-span-4">
                        <div>
                            <p className="font-medium tracking-wide text-gray-300">Category 1</p>
                            <ul className="mt-2 space-y-2">
                                <li>
                                    <a href="/" className="text-gray-500 transition-colors duration 300 hover:text-orange-500">News</a>
                                </li>
                                <li>
                                    <a href="/" className="text-gray-500 transition-colors duration 300 hover:text-orange-500">World</a>
                                </li>
                                <li>
                                    <a href="/" className="text-gray-500 transition-colors duration 300 hover:text-orange-500">Games</a>
                                </li>
                                <li>
                                    <a href="/" className="text-gray-500 transition-colors duration 300 hover:text-orange-500">References</a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <p className="font-medium tracking-wide text-gray-300">Category 2</p>
                            <ul className="mt-2 space-y-2">
                                <li>
                                    <a href="/" className="text-gray-500 transition-colors duration 300 hover:text-orange-500">Web</a>
                                </li>
                                <li>
                                    <a href="/" className="text-gray-500 transition-colors duration 300 hover:text-orange-500">Ecommerce</a>
                                </li>
                                <li>
                                    <a href="/" className="text-gray-500 transition-colors duration 300 hover:text-orange-500">Business</a>
                                </li>
                                <li>
                                    <a href="/" className="text-gray-500 transition-colors duration 300 hover:text-orange-500">Entertainment</a>
                                </li>
                                <li>
                                    <a href="/" className="text-gray-500 transition-colors duration 300 hover:text-orange-500">Portfolio</a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <p className="font-medium tracking-wide text-gray-300">Category 3</p>
                            <ul className="mt-2 space-y-2">
                                <li>
                                    <a href="/" className="text-gray-500 transition-colors duration 300 hover:text-orange-500">Media</a>
                                </li>
                                <li>
                                    <a href="/" className="text-gray-500 transition-colors duration 300 hover:text-orange-500">Brochure</a>
                                </li>
                                <li>
                                    <a href="/" className="text-gray-500 transition-colors duration 300 hover:text-orange-500">Non-Profit</a>
                                </li>
                                <li>
                                    <a href="/" className="text-gray-500 transition-colors duration 300 hover:text-orange-500">Education</a>
                                </li>
                                <li>
                                    <a href="/" className="text-gray-500 transition-colors duration 300 hover:text-orange-500">Projects</a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <p className="font-medium tracking-wide text-gray-300">Category 4</p>
                            <ul className="mt-2 space-y-2">
                                <li>
                                    <a href="/" className="text-gray-500 transition-colors duration 300 hover:text-orange-500">Infopreneur</a>
                                </li>
                                <li>
                                    <a href="/" className="text-gray-500 transition-colors duration 300 hover:text-orange-500">Personal</a>
                                </li>
                                <li>
                                    <a href="/" className="text-gray-500 transition-colors duration 300 hover:text-orange-500">Wikipedia</a>
                                </li>
                                <li>
                                    <a href="/" className="text-gray-500 transition-colors duration 300 hover:text-orange-500">Forum</a>
                                </li>
                                <li>
                                    <a href="/" className="text-gray-500 transition-colors duration 300 hover:text-orange-500">Business</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-5 md:max-w-md lg:col-span-2 lg:mt-0">
                        <p className="font-medium tracking-wide text-gray-300">Form</p>
                        <form className="pt-4 flex flex-col md:flex-row">
                            <input type="email" name="email" id="email" placeholder="Email"
                                className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-purple-400 focus:outline-none"
                            />
                            <button type="submit"
                                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md border hover:bg-orange-500 focus:outline-none"
                            >
                                Subscribe
                            </button>
                        </form> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;