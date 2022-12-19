import React from 'react'
import { Link } from 'react-router-dom'
import { RiCalendar2Line, RiFolder2Line } from 'react-icons/ri'
import { usePortfolioQuery } from '@/hooks'
import { Spin, MarkdownPreview } from '@/components'
import { fullDateFormat } from '@/utils'
import { PortfolioWrap } from './style'

const Portfolio = () => {
  const { data, loading } = usePortfolioQuery()
  if (loading)
    return (
      <div className='container spin-container'>
        <Spin size='32' />
      </div>
    )

  const { name, image, createdAt, content, link, gallery, portfolioCategories } = data.portfolio
  return (
    <PortfolioWrap>
      <div className='container portfolio-container'>
        <div className='portfolio-cover'>
          <img src={image} />
        </div>
        <div className='portfolio-name'>{name}</div>
        <div className='portfolio-info'>
          <div className='info-item'>
            <RiCalendar2Line />
            <div className='info-item-text'>{fullDateFormat(createdAt)}</div>
          </div>
          <div className='info-item'>
            <RiFolder2Line />
            {portfolioCategories.map(cate => (
              <div className='info-item-text' key={cate.name}>
                {cate.name}
              </div>
            ))}
          </div>
        </div>
        <div className='portfolio-content'>
          <MarkdownPreview source={content} />
        </div>
        <div className='portfolio-btns'>
          <a href={link} target='_blank' className='portfolio-btn' rel='noreferrer'>
            查看
          </a>
        </div>
        <div className='divider'></div>
        <div className='portfolio-gallery'>
          {gallery.map((item, index) => (
            <div className='portfolio-gallery-item' key={index}>
              <div className='gallery-item-image'>
                <img src={item.image} />
              </div>
              <div className='gallery-item-title'>{item.title}</div>
            </div>
          ))}
        </div>
        <div className='divider'></div>
      </div>
    </PortfolioWrap>
  )
}

export default Portfolio
