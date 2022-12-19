import React, { useState, useEffect } from 'react'
import cx from 'clsx'
import { usePortfoliosCategoriesQuery, usePortfoliosQuery } from '@/hooks'
import { PortfolioList, Spin } from '@/components'
import { PortfoliosWrap } from './style'

const Portfolios = () => {
  const [currentCategory, setCurrentCategory] = useState('all')
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    setCurrentPage(1)
  }, [currentCategory])

  const { data: categoriesData, loading: categoriesLoading } = usePortfoliosCategoriesQuery()
  const { data: portfoliosData, loading: portfoliosLoading } = usePortfoliosQuery(
    currentCategory,
    currentPage
  )

  return (
    <PortfoliosWrap>
      <div className='container portfolios-container'>
        <div className='titlebar'>
          <div className='title'>Portfolios</div>
          {categoriesLoading ? (
            <div className='spin-container'>
              <Spin size='24' />
            </div>
          ) : (
            <div className='title-secondary portfolios-categories'>
              <div
                className={cx('portfolios-category-item', { active: currentCategory === 'all' })}
                onClick={() => setCurrentCategory('all')}
              >
                全部
              </div>
              {categoriesData?.portfolioCategories?.map(category => (
                <div
                  className={cx('portfolios-category-item', {
                    active: currentCategory === category.slug
                  })}
                  key={category.slug}
                  onClick={() => setCurrentCategory(category.slug)}
                >
                  {category.name}
                </div>
              ))}
            </div>
          )}
        </div>

        {portfoliosLoading ? (
          <div className='spin-container'>
            <Spin size='32' />
          </div>
        ) : (
          <div className='portfolios-list-container'>
            <PortfolioList
              data={portfoliosData?.portfoliosConnection}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        )}
      </div>
    </PortfoliosWrap>
  )
}

export default Portfolios
