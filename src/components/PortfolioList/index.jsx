import React from 'react'
import { PortfolioItem, Pagination } from '@/components'
import { portfoliosPageLimit } from '@/constants/config'
import { PortfolioListWrap } from './style'

const PortfolioList = ({ data, currentPage, setCurrentPage }) => {
  return (
    <PortfolioListWrap>
      <div className='portfolio-list-container'>
        {data?.edges?.map(portfolio => (
          <PortfolioItem key={portfolio.node.id} data={portfolio} />
        ))}
      </div>
      {data?.pageInfo && (
        <Pagination
          count={data?.aggregate?.count}
          hasPrevPage={data?.pageInfo?.hasPreviousPage}
          hasNextPage={data?.pageInfo?.hasNextPage}
          limit={portfoliosPageLimit}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </PortfolioListWrap>
  )
}

export default PortfolioList
