import styled from 'styled-components'
import s from '@/styles/global.style'

export const HomeWrap = styled.div`
  margin: ${s['space-2xl']} 0 ${s['space-4xl']} 0;

  .posts-group {
    display: flex;
    flex-direction: column;
    gap: ${s['space-lg']};
  }

  .portfolios-group {
    ${s.gridCols(3, '24px')};
  }
`
