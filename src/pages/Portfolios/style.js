import styled from 'styled-components'
import s from '@/styles/global.style'

export const PortfoliosWrap = styled.div`
  .portfolios-container {
    margin: ${s['space-2xl']} auto ${s['space-4xl']} auto;

    .portfolios-categories {
      ${s.flex('flex-end', 'center')};
      gap: ${s['space-md']};

      .portfolios-category-item {
        color: var(--sim-text-secondary);
        cursor: pointer;

        &:hover {
          color: var(--sim-text-primary);
        }

        &.active {
          color: var(--sim-title);
        }
      }
    }
  }
`
