import React from 'react'
import { useQuery } from '@apollo/client'
import blogGql from '@/service/gql'

const usePostsCategoriesQuery = () => {
  return useQuery(blogGql.GET_POSTS_CATEGORIES)
}

export default usePostsCategoriesQuery
