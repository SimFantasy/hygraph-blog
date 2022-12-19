import React from 'react'
import { useQuery } from '@apollo/client'
import blogGql from '@/service/gql'
import { postsPageLimit } from '@/constants/config'

const usePostsQuery = (currentCategory, currentPage) => {
  const offset = (currentPage - 1) * postsPageLimit
  return useQuery(blogGql.GET_POSTS, {
    variables: {
      first: postsPageLimit,
      skip: offset,
      slug: currentCategory !== 'all' ? currentCategory : ''
    }
  })
}

export default usePostsQuery
