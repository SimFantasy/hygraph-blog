import styled from 'styled-components'
import s from '@/styles/global.style'

export const PostItemWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .post-item-title {
    /* margin-bottom: ${s['space-xs']}; */
    width: 100%;
    font-size: 18px;
    color: var(--sim-title);
    font-weight: 600;
    ${s.ellipsis(2)};
    line-height: 1.8;
  }

  .post-item-info {
    ${s.flex('flex-start', 'center')};
    gap: ${s['space-md']};
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

  .post-item-description {
    width: 100%;
    font-size: 16px;
    color: var(--sim-text-primary);
    ${s.ellipsis(3)};
    line-height: 1.5;
  }
`
