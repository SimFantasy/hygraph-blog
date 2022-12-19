import styled from 'styled-components'
import s from '@/styles/global.style'

export const PortfolioWrap = styled.div`
  .portfolio-container {
    display: flex;
    flex-direction: column;
    margin: ${s['space-2xl']} auto ${s['space-4xl']} auto;

    .portfolio-cover {
      margin-bottom: ${s['space-xl']};
      width: 100%;
      max-height: 320px;
      overflow: hidden;
      border-radius: ${s['radius-md']};

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    .portfolio-name {
      font-size: 24px;
      color: var(--sim-title);
      line-height: 1.8;
    }

    .portfolio-info {
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

    .portfolio-content {
      margin-bottom: ${s['space-lg']};
      width: 100%;
      font-size: 18px;
      color: var(--sim-text-primary);
      line-height: 2;
    }

    .portfolio-btns {
      ${s.flex('flex-start', 'center')};
      gap: ${s['space-sm']};
      margin-bottom: ${s['space-lg']};
      height: 40px;

      .portfolio-btn {
        ${s.flex('center', 'center')};
        padding: 8px 16px;
        border-radius: ${s['radius-sm']};
        background-color: var(--sim-title);
        font-size: 14px;
        color: var(--sim-bg-secondary);

        &:hover {
          background-color: var(--sim-text-primary);
        }
      }
    }

    .portfolio-gallery {
      display: flex;
      flex-direction: column;
      gap: ${s['space-lg']};
      width: 100%;

      .portfolio-gallery-item {
        display: flex;
        flex-direction: column;

        .gallery-item-image {
          flex: 1;
          width: 100%;
          max-height: 400px;
          overflow: hidden;
          border-radius: ${s['radius-md']};

          img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
        }

        .gallery-item-title {
          flex: 0 0 auto;
          ${s.flex('center', 'center')};
          width: 100%;
          height: 32px;
          font-size: 16px;
          color: var(--sim-title);
        }
      }
    }
  }
`
