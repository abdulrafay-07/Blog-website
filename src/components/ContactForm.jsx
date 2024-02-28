const ContactForm = () => {
    return (
        <div>
            <h2 className="text-3xl lg:text-4xl pb-5 leading-snug font-bold">Contact Form</h2>
            <form className="p-5 lg:p-8 pl-2 lg:pl-4 border-2 rounded border-black border-opacity-50 w-full flex items-center flex-col">
                <input required
                    type="text" 
                    placeholder="Name"
                    className="px-2 py-4 border-b-2 w-full border-gray-300"
                />
                <input required
                    type="email" 
                    placeholder="Email"
                    className="px-2 py-4 border-b-2 w-full border-gray-300"
                />
                <button 
                    className="py-3 w-2/3 mt-6 rounded-xl text-white text-lg bg-orange-500 hover:text-orange-500 hover:bg-gray-100 duration-400 ease-in transition"
                >
                    Submit
                </button>
            </form>
        </div>
    )
}

export default ContactForm;