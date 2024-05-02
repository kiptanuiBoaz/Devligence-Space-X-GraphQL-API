import React from 'react';
import './pagination.scss';
import { useSelector, useDispatch } from "react-redux";
import { ItemsPerPage } from '..';
import { NAVIGATE_PAGE, selectPagination } from '../../redux/paginationSlice';


export const Pagination: React.FC = () => {
    //show three page numbers
    const pagesToShow = 3;
    // pagination state from redux store
    const { limit, page: currentPage } = useSelector(selectPagination);

    const dispatch = useDispatch();

    const totalPages = Math.ceil(30 / limit);
    //page numbers to display
    const pageNumbers = Array.from({ length: pagesToShow }, (_, index) => currentPage - 1 + index);
    return (
        <div className="pagination">
            <ItemsPerPage />
            {currentPage > 1 &&
                <button
                    className="pagination-button"
                    disabled={currentPage === 1}
                    onClick={() => dispatch(NAVIGATE_PAGE({ page: "prev" }))}
                >
                    &lt; Back
                </button>
            }
            <div className="page-numbers">
                {pageNumbers.map((pageNumber) => (
                    pageNumber > 0 && totalPages - 1 > currentPage &&
                    <button
                        key={pageNumber}
                        className={`page-number ${pageNumber === currentPage ? 'active' : ''}`}
                        onClick={() => dispatch(NAVIGATE_PAGE({ page: pageNumber }))}
                    >
                        {pageNumber}
                    </button>
                ))}
            </div>

            {totalPages - 1 > currentPage &&
                <button
                    className="pagination-button"
                    disabled={currentPage === totalPages}
                    onClick={() => dispatch(NAVIGATE_PAGE({ page: "next" }))}
                >
                    Next &gt;
                </button>
            }


        </div >
    );
};

