import React from 'react'
import { usePageQuery } from '@/hooks'
import { Spin, MarkdownPreview } from '@/components'
import { SinglePageWrap } from './style'

const SinglePage = () => {
  const { data, loading } = usePageQuery()
  if (loading)
    return (
      <div className='container spin-container'>
        <Spin size='32' />
      </div>
    )
  const { title, content, image } = data.page

  return (
    <SinglePageWrap>
      <div className='container single-page-container'>
        {image && (
          <div className='single-page-cover'>
            <img src={image} />
          </div>
        )}
        <div className='titlebar'>
          <div className='title'>{title}</div>
        </div>
        <div className='single-page-content'>
          <MarkdownPreview source={content} />
        </div>
        <div className='divider'></div>
      </div>
    </SinglePageWrap>
  )
}

export default SinglePage
