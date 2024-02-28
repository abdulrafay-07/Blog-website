import ServiceCards from "../components/ServiceCards";

const Services = () => {
    return (
        <div>
            <div className="px-4 py-40 bg-black text-center text-white">
                <h2 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">Services</h2>
                <p className="text-gray-300 text-xl font-primary">What we Offer</p>
            </div>

            <div className="max-w-7xl mx-auto py-12 sm:py-20">
                <ServiceCards />
            </div>
        </div>
    )
}

export default Services;