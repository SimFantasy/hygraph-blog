import styled from 'styled-components'
import s from '@/styles/global.style'

export const SinglePageWrap = styled.div`
  .single-page-container {
    display: flex;
    flex-direction: column;
    margin: ${s['space-2xl']} auto ${s['space-4xl']} auto;

    .single-page-cover {
      margin-bottom: ${s['space-xl']};
      width: 100%;
      max-height: 320px;
      border-radius: ${s['radius-md']};
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    .single-page-content {
      width: 100%;
      font-size: 18px;
      color: var(--sim-text-primary);
      line-height: 2;
    }
  }
`
