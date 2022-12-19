import styled from 'styled-components'
import s from '@/styles/global.style'

export const PaginationWrap = styled.div`
  .pagination-container {
    ${s.flex('space-between', 'center')};
    margin-top: ${s['space-xl']};
    height: 48px;

    .pagination-count {
      flex: 0 0 auto;
      ${s.flex('flex-start', 'center')};
      height: 100%;
      font-size: 14px;
      color: var(--sim-text-primary);
    }

    .pagination-btns {
      flex: 1;
      ${s.flex('flex-end', 'center')};
      gap: ${s['space-sm']};
      height: 100%;

      .pagination-btn {
        padding: 8px 16px;
        border: 0;
        border-radius: ${s['radius-sm']};
        background-color: var(--sim-title);
        color: var(--sim-bg-default);
        font-size: 16px;
        cursor: pointer;

        &:hover {
          background-color: var(--sim-text-primary);
        }
      }
    }
  }
`
