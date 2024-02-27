import ServiceCards from "../components/ServiceCards";

const Services = () => {
    return (
        <div>
            <div className="px-4 py-40 bg-black text-center text-white">
                <h2 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">Services</h2>
            </div>

            <div className="max-w-7xl mx-auto py-12 sm:py-20">
                <div className="flex flex-col items-center">
                    <h3 className="text-2xl text-orange-500 font-semibold my-1">Our Services</h3>
                    <h2 className="text-4xl sm:text-6xl font-bold my-1">What we Offer</h2>
                </div>
                
                <ServiceCards />
            </div>
        </div>
    )
}

export default Services;