import React, { useState, useEffect } from 'react';

import ReactPaginate from 'react-paginate';
const Pagination = ({onPageChange,cards}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);
  

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentCards = cards.slice(indexOfFirstPost, indexOfLastPost).slice(0, postsPerPage);

  const paginate = ({ selected }) => {
    setCurrentPage(selected + 1);
    onPageChange(selected + 1);
  };

  return (
    <div className="Pagination-container">
        {cards ? (
          <div className="blog-content-section">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 my-8">
            {currentCards.map((card,i) => <React.Fragment key={i}>{card}</React.Fragment>)}
          </div>
          <ReactPaginate
              onPageChange={paginate}
              pageCount={Math.ceil(cards.length / postsPerPage)}
              previousLabel={'Prev'}
              nextLabel={'Next'}
              pageRangeDisplayed={1}
              marginPagesDisplayed={1}
              breakClassName={'page-number'}
              disableInitialCallback={true}
              containerClassName={'pagination'}
              pageLinkClassName={'page-number'}
              previousLinkClassName={'page-number'}
              nextLinkClassName={'page-number'}
              activeLinkClassName={'active'}
            />
          </div>
        ) : (
          <div className="loading">Loading...</div>
        )}
    </div>
  );
};

export default Pagination;
