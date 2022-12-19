import styled from 'styled-components'
import s from '@/styles/global.style'

export const PortfolioListWrap = styled.div`
  .portfolio-list-container {
    ${s.gridCols(3)};
    gap: ${s['space-md']};
    width: 100%;
  }
`
