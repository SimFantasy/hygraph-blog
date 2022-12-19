import React from 'react'
import { useQuery } from '@apollo/client'
import blogGql from '@/service/gql'
import { portfoliosPageLimit } from '@/constants/config'

const usePortfoliosQuery = (currentCategory, currentPage) => {
  const offset = (currentPage - 1) * portfoliosPageLimit
  return useQuery(blogGql.GET_PORTFOLIOS, {
    variables: {
      first: portfoliosPageLimit,
      skip: offset,
      slug: currentCategory !== 'all' ? currentCategory : ''
    }
  })
}

export default usePortfoliosQuery
