import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import cx from 'clsx'
import { usePostsCategoriesQuery, usePostsQuery } from '@/hooks'
import { PostList, Spin } from '@/components'
import { PostsWrap } from './style'

const Posts = () => {
  const [currentCategory, setCurrentCategory] = useState('all')
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    setCurrentPage(1)
  }, [currentCategory])

  const { data: categoriesData, loading: categoriesLoading } = usePostsCategoriesQuery()
  const { data: postsData, loading: postsLoading } = usePostsQuery(currentCategory, currentPage)

  return (
    <PostsWrap>
      <div className='container posts-container'>
        <div className='titlebar'>
          <div className='title'>Posts</div>
          {categoriesLoading ? (
            <div className='spin-container'>
              <Spin size='24' />
            </div>
          ) : (
            <div className='title-secondary posts-categories'>
              <Link
                className={cx('posts-category-item', { active: currentCategory === 'all' })}
                onClick={() => setCurrentCategory('all')}
              >
                全部
              </Link>
              {categoriesData?.postCategories?.map(category => (
                <Link
                  className={cx('posts-category-item', {
                    active: currentCategory === category.slug
                  })}
                  key={category.slug}
                  onClick={() => setCurrentCategory(category.slug)}
                >
                  {category.name}
                </Link>
              ))}
            </div>
          )}
        </div>

        {postsLoading ? (
          <div className='spin-container'>
            <Spin size='32' />
          </div>
        ) : (
          <div className='posts-list-container'>
            <PostList
              data={postsData?.postsConnection}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        )}
      </div>
    </PostsWrap>
  )
}

export default Posts
