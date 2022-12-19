import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import blogGql from '@/service/gql'

const usePortfolioQuery = () => {
  const { slug } = useParams()
  return useQuery(blogGql.GET_PORTFOLIO, {
    variables: { slug }
  })
}

export default usePortfolioQuery
