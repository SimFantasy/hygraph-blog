import styled from 'styled-components'
import s from '@/styles/global.style'

export const PortfolioItemWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${s['space-xs']};
  width: 100%;

  .portfolio-item-cover {
    width: 100%;
    max-height: 240px;
    overflow: hidden;
    border-radius: ${s['radius-sm']};

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .portfolio-item-title {
    ${s.flex('flex-start', 'center')};
    ${s.ellipsis(2)};
    line-height: 1.5;
    font-size: 14px;
    color: var(--sim-title);
  }
`
