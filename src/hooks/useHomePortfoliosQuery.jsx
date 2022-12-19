import React from 'react'
import { useQuery } from '@apollo/client'
import blogGql from '@/service/gql'
import { homePortfoliosCount } from '@/constants/config'

const useHomePortfoliosQuery = () => {
  return useQuery(blogGql.GET_HOME_PORTFOLIOS, {
    variables: { first: homePortfoliosCount }
  })
}

export default useHomePortfoliosQuery
