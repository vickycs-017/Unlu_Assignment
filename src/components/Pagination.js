import React from "react";

const Pagination = ({ postPerPage, totalPost, paginate }) => {
    const pageNumbers = [];
    for(let i=1; i<=Math.ceil(totalPost / postPerPage); i++){
        pageNumbers.push(i);
    }

    return (
        <nav className="pagination">
            {pageNumbers.map(numbers => (
                <div key={numbers} className="pages">
                    <a onClick={() => paginate(numbers)} href="!#">
                        {numbers}
                    </a>
                </div>
    ))}
        </nav>
    )
}

export default Pagination;