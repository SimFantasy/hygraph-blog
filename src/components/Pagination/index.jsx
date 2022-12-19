import React from 'react'
import { PaginationWrap } from './style'

const Pagination = ({ count, limit, currentPage, setCurrentPage, hasPrevPage, hasNextPage }) => {
  const totalPage = Math.ceil(count / limit)

  return (
    <PaginationWrap>
      <div className='pagination-container'>
        <div className='pagination-count'>
          {currentPage} of {totalPage}
        </div>
        <div className='pagination-btns'>
          {hasPrevPage && (
            <button
              className='pagination-btn'
              onClick={() => setCurrentPage(pre => pre - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
          )}
          {hasNextPage && (
            <button
              className='pagination-btn'
              onClick={() => setCurrentPage(pre => pre + 1)}
              disabled={currentPage === totalPage}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </PaginationWrap>
  )
}

export default Pagination
