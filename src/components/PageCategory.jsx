const PageCategory = ({ onSelectCategory, activeCategory }) => {
    const categories = ["Startups", "Security", "AI", "Apps", "Tech"];

    return (
        <div className="px-4 py-5 mb-8 space-x-6 sm:space-x-10 lg:space-x-16 flex flex-wrap items-center border-b-2 text-gray-900 font-semibold">
            <button 
                onClick={() => onSelectCategory(null)} 
                className={`lg:ml-12 ${activeCategory ? "" : "active-button"}`}
            >
                All
            </button>
            {
                categories.map((category, index) => (
                    <button 
                        key={index}
                        onClick={() => onSelectCategory(category)}
                        className={`mr-2 space-x-16 ${activeCategory === category ? "active-button" : ""}`}
                    >
                        {category}
                    </button>
                ))
            }
        </div>
    )
}

export default PageCategory;