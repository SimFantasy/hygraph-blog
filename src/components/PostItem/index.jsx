import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { RiCalendar2Line, RiFolder2Line } from 'react-icons/ri'
import { dateFormat } from '@/utils'
import { PostItemWrap } from './style'

const PostItem = ({ data }) => {
  return (
    <PostItemWrap>
      <Link
        to={`/post/${data?.node?.slug ? data?.node.slug : data?.slug}`}
        className='post-item-title'
      >
        {data?.node?.title ? data?.node?.title : data?.title}
      </Link>
      <div className='post-item-info'>
        <div className='info-item'>
          <RiCalendar2Line />
          <span className='info-item-text'>
            {dateFormat(data?.node?.updatedAt ? data?.node?.updatedAt : data?.updatedAt)}
          </span>
        </div>
        <div className='info-item'>
          <RiFolder2Line />
          {(data?.node?.categories ? data.node.categories : data.categories).map(cate => (
            <span className='info-item-text' key={cate.name}>
              {cate.name}
            </span>
          ))}
        </div>
      </div>
      <div className='post-item-description'>
        {data?.node?.description ? data?.node?.description : data?.description}
      </div>
    </PostItemWrap>
  )
}

export default PostItem
