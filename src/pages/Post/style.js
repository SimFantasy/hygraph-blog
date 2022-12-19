import styled from 'styled-components'
import s from '@/styles/global.style'

export const PostWrap = styled.div`
  .post-container {
    display: flex;
    flex-direction: column;
    margin: ${s['space-2xl']} auto ${s['space-4xl']} auto;

    .post-featured-image {
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

    .post-title {
      font-size: 24px;
      color: var(--sim-title);
      line-height: 1.8;
    }

    .post-info {
      margin-bottom: ${s['space-lg']};
      ${s.flex('flex-start', 'center')};
      gap: ${s['space-md']};
      height: 40px;

      .info-item {
        ${s.flex('flex-start', 'center')};
        gap: ${s['space-xs']};
        height: 40px;
        font-size: 14px;
        color: var(--simz-text-secondary);

        .info-item {
          flex: 0 0 auto;
          ${s.flex('flex-start', 'center')};
          gap: ${s['space-xs']};
          height: 100%;

          svg {
            font-size: 16px;
          }
        }
      }
    }

    .post-centent {
      margin-bottom: ${s['space-lg']};
      width: 100%;
      font-size: 18px;
      color: var(--sim-text-primary);
      line-height: 2;
    }

    .post-tags {
      ${s.flex('flex-start', 'center')};
      gap: ${s['space-sm']};
      height: 40px;

      .tag-item {
        flex: 0 0 auto;
        ${s.flex('center', 'center')};
        padding: 6px 16px;
        border-radius: ${s['radius-sm']};
        background-color: var(--sim-text-disabled);
        font-size: 14px;
        color: var(--sim-bg-secondary);
      }
    }
  }
`
