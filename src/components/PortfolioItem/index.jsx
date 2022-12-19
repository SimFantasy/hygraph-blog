import React from 'react'
import { Link } from 'react-router-dom'
import { PortfolioItemWrap } from './style'

const PortfolioItem = ({ data }) => {
  return (
    <PortfolioItemWrap>
      <Link
        to={`/portfolio/${data?.node?.slug ? data?.node.slug : data?.slug}`}
        className='portfolio-item-cover'
      >
        <img src={data?.node?.image ? data?.node?.image : data?.image} />
      </Link>
      <div className='portfolio-item-title'>{data?.node?.name ? data?.node?.name : data?.name}</div>
    </PortfolioItemWrap>
  )
}

export default PortfolioItem
