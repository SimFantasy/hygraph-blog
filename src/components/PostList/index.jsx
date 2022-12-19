import React from 'react'
import { PostItem, Pagination } from '@/components'
import { postsPageLimit } from '@/constants/config'
import { PostListWrap } from './style'

const PostList = ({ data, currentPage, setCurrentPage }) => {
  return (
    <PostListWrap>
      <div className='post-list-container'>
        {data?.edges?.map(post => (
          <PostItem key={post.node.id} data={post} />
        ))}
      </div>
      {data?.pageInfo && (
        <Pagination
          count={data?.aggregate?.count}
          hasPrevPage={data?.pageInfo?.hasPreviousPage}
          hasNextPage={data?.pageInfo?.hasNextPage}
          limit={postsPageLimit}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </PostListWrap>
  )
}

export default PostList
