const About = () => {
    return (
        <div>
            <div className="px-4 py-40 bg-black text-center text-white">
                <h2 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">About Us</h2>
                <p className="text-gray-300 text-xl font-primary">Learn more about the team behind the blog!</p>
            </div>

            <div className="px-4 py-12 sm:py-20 md:px-10 lg:px-20 max-w-4xl mx-auto">

                <div className="py-14 flex flex-col">
                    <div className="py-3">
                        <h2 className="text-3xl font-semibold my-1">Welcome to our Blog!</h2>
                        <p className="text-xl text-gray-700 mt-2">We are a team of passionate writers, dedicated to bringing you the latest news, the most interesting stories, and the most thought-provoking ideas. Our goal is to inform, entertain, and inspire our readers, and we take that mission seriously.</p>
                    </div>

                    <div className="py-3">
                        <h2 className="text-3xl font-semibold my-1">What We Do</h2>
                        <p className="text-xl text-gray-700 mt-2">Our team is constantly on the lookout for the most compelling stories, the most fascinating people, and the most intriguing ideas. We cover a wide range of topics, from science and technology to art and culture, from politics and current events to travel and food. Whatever your interests, we've got you covered.</p>
                    </div>

                    <div className="py-3">
                        <h2 className="text-3xl font-semibold my-1">Our Passion</h2>
                        <p className="text-xl text-gray-700 mt-2">We are passionate about storytelling, and we believe that everyone has a story to tell. We are committed to amplifying underrepresented voices and shining a light on untold stories. We believe in the power of words to connect us, to inspire us, and to change the world. And we are excited to share that power with you.</p>
                    </div>

                    <div className="py-3">
                        <h2 className="text-3xl font-semibold my-1">About the Team</h2>
                        <p className="text-xl text-gray-700 mt-2">Meet the incredible team behind this website. We are a group of talented individuals who have come together to create a platform that aims to inform, inspire, and engage our audience. Our diverse backgrounds and expertise ensure that we deliver high-quality content that resonates with our readers.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;