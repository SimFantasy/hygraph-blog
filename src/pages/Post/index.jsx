import React from 'react'
import { RiCalendar2Line, RiFolder2Line } from 'react-icons/ri'
import { usePostQuery } from '@/hooks'
import { Spin, MarkdownPreview } from '@/components'
import { fullDateFormat } from '@/utils'
import { PostWrap } from './style'

const Post = () => {
  const { data, loading } = usePostQuery()
  if (loading)
    return (
      <div className='container spin-container'>
        <Spin size='32' />
      </div>
    )
  const { featuredImage, title, createdAt, tags, categories, content } = data.post
  return (
    <PostWrap>
      <div className='container post-container'>
        {featuredImage && (
          <div className='post-featured-image'>
            <img src={featuredImage} />
          </div>
        )}
        <div className='post-title'>{title}</div>
        <div className='post-info'>
          <div className='info-item'>
            <RiCalendar2Line />
            <span className='info-item-text'>{fullDateFormat(createdAt)}</span>
          </div>
          <div className='info-item'>
            <RiFolder2Line />
            {categories.map(cate => (
              <span className='info-item-text' key={cate.name}>
                {cate.name}
              </span>
            ))}
          </div>
        </div>
        <div className='post-centent'>
          <MarkdownPreview source={content.markdown} />
        </div>
        <div className='post-tags'>
          {tags.map(tag => (
            <div className='tag-item' key={tag}>
              {tag}
            </div>
          ))}
        </div>
        <div className='divider'></div>
      </div>
    </PostWrap>
  )
}

export default Post
