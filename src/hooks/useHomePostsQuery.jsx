import React from 'react'
import { useQuery } from '@apollo/client'
import blogGql from '@/service/gql'
import { homePostsCount } from '@/constants/config'

const useHomePostsQuery = () => {
  return useQuery(blogGql.GET_HOME_POSTS, {
    variables: { first: homePostsCount }
  })
}

export default useHomePostsQuery
