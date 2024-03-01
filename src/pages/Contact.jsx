import ContactForm from "../components/ContactForm";

const Contact = () => {
    return (
        <div>
            <div className="px-4 py-40 bg-black text-center text-white">
                <h2 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">Contact Us</h2>
            </div>

            <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start lg:justify-evenly xl:justify-between max-w-7xl mx-auto py-12 px-4 sm:py-20">
                <div className="p-4 xl:py-0 w-10/12 sm:w-3/4 md:w-2/3 lg:w-2/5">
                    <ContactForm />
                </div>
                <div className="p-4 xl:py-0 lg:w-1/2 sm:w-2/3">
                    <h2 className="text-2xl lg:text-4xl pb-5 leading-snug font-bold hidden sm:block">Visit Us</h2>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3469.674374568823!2d80.20052855615658!3d29.58407630527979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a125001dabb463%3A0x562a50fddbb2d39a!2sMogwart!5e0!3m2!1sen!2s!4v1709141636073!5m2!1sen!2s" styles="border:0;" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-full h-[450px] hidden sm:block"></iframe>
                </div>
            </div>
        </div>
    )
}

export default Contact;