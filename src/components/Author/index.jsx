import React from 'react'
import { useQuery } from '@apollo/client'
import blogGql from '@/service/gql'
import { authorId } from '@/constants/config'
import { Spin } from '@/components'
import { AuthorWrap } from './style'

const Author = () => {
  const { data, loading } = useQuery(blogGql.GET_AUTHOR, {
    variables: { id: authorId }
  })

  if (loading)
    return (
      <div className='container spin-container'>
        <Spin size='32' />
      </div>
    )

  return (
    <AuthorWrap>
      <div className='author-container'>
        <div className='author-avatar'>
          <img src={data?.author?.avatar.url} />
        </div>
        <div className='author-info'>
          <div className='author-name'>{data?.author?.name}</div>
          <div className='author-bio'>{data?.author?.bio}</div>
        </div>
      </div>
    </AuthorWrap>
  )
}

export default Author
