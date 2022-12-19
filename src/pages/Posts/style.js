import styled from 'styled-components'
import s from '@/styles/global.style'

export const PostsWrap = styled.div`
  .posts-container {
    margin: ${s['space-2xl']} auto ${s['space-4xl']} auto;

    .posts-categories {
      ${s.flex('flex-end', 'center')};
      gap: ${s['space-md']};

      .posts-category-item {
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
