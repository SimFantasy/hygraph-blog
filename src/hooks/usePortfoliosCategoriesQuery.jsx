import React from 'react'
import { useQuery } from '@apollo/client'
import blogGql from '@/service/gql'

const usePortfoliosCategoriesQuery = () => {
  return useQuery(blogGql.GET_PORTFOLIOS_CATEGORIES)
}

export default usePortfoliosCategoriesQuery
