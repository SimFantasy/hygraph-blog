import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import blogGql from '@/service/gql'

const usePostQuery = () => {
  const { slug } = useParams()
  return useQuery(blogGql.GET_POST, {
    variables: { slug }
  })
}

export default usePostQuery
