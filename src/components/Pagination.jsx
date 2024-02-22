const Pagination = ({ onPageChange, currentPage, blogs, blogsPerPage }) => {
    const totalPages = Math.ceil(blogs.length / blogsPerPage);
    
    const renderPaginationLinks = () => {
        return Array.from({length: totalPages}, (_, index) => index + 1).map((pageNumber) => (
            <li className={pageNumber === currentPage ? "activePagination" : ""} key={pageNumber}>
                <a href="#"
                    onClick={() => onPageChange(pageNumber)}
                >
                    {pageNumber}
                </a>
            </li>
        ))
    }

    return (
        <ul className="pagination flex justify-center items-center list-none m-0 p-0 my-8 flex-wrap gap-4">
            <li className="m-0 mx-[5px]">
                <button 
                    onClick={() => onPageChange(currentPage - 1)} 
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
            </li>
            <div className="flex gap-1">
                {renderPaginationLinks()}
            </div>
            <li className="m-0 mx-[5px] px-[6.5px]">
                <button 
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </li>
        </ul>
    )
}

export default Pagination;