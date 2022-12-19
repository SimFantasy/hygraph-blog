import React from 'react'
import { useHomePostsQuery, useHomePortfoliosQuery } from '@/hooks'
import { Author, PostItem, PortfolioItem, Spin } from '@/components'
import { HomeWrap } from './style'

const Home = () => {
  const { data: postsData, loading: postsLoading } = useHomePostsQuery()
  const { data: portfoliosData, loading: portfoliosLoading } = useHomePortfoliosQuery()

  return (
    <HomeWrap>
      <div className='container home-container'>
        <Author />

        <div className='page-block'>
          <div className='titlebar'>
            <div className='title'>Posts</div>
          </div>
          {postsLoading ? (
            <div className='spin-container'>
              <Spin size='32' />
            </div>
          ) : (
            <div className='posts-group'>
              {postsData?.posts.map(post => (
                <PostItem key={post.id} data={post} />
              ))}
            </div>
          )}
        </div>

        <div className='page-block'>
          <div className='titlebar'>
            <div className='title'>Portfolios</div>
          </div>
          {portfoliosLoading ? (
            <div className='spin-container'>
              <Spin size='32' />
            </div>
          ) : (
            <div className='portfolios-group'>
              {portfoliosData?.portfolios?.map(portfolio => (
                <PortfolioItem key={portfolio.id} data={portfolio} />
              ))}
            </div>
          )}
        </div>
      </div>
    </HomeWrap>
  )
}

export default Home
