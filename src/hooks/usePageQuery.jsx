import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import blogGql from '@/service/gql'

const usePageQuery = () => {
  const { slug } = useParams()
  return useQuery(blogGql.GET_PAGE, {
    variables: { slug }
  })
}

export default usePageQuery
