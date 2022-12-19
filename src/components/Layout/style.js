import styled from 'styled-components'
import { rem } from 'polished'
import s from '@/styles/global.style'
import themeImage from '@/assets/theme.png'

export const LayoutWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;

  .layout-main {
    min-height: calc(100vh - ${s['header-height']} - ${s['footer-height']});
  }
`

export const HeaderWrap = styled.header`
  width: 100vw;
  height: ${s['header-height']};

  .header-container {
    ${s.flex('space-between', 'center')};
    gap: ${s['space-sm']};
    height: 100%;

    .logo {
      flex: 0 0 auto;
      ${s.flex('flex-start', 'center')};
      gap: ${s['space-xs']};
      height: 100%;
      color: var(--sim-title);
      svg {
        font-size: 32px;
      }
      .logo-text {
        font-size: 24px;
        font-weight: 700;
      }
    }

    .navs {
      flex: 1;
      ${s.flex('flex-end', 'center')};
      gap: ${s['space-md']};
      height: 100%;

      .nav-item {
        font-size: 16px;
        color: var(--sim-text-secondary);

        &:hover {
          color: var(--simz-text-primary);
        }

        &.active {
          color: var(--sim-title);
          font-weight: 600;
        }
      }
    }

    .color-mode {
      flex: 0 0 auto;
      ${s.flex('center', 'center')};
      width: 24px;
      height: 24px;
      background: url(${themeImage}) 0 / auto 24px no-repeat;
      transition: background-position 0.4s steps(5);
      cursor: pointer;

      &.dark {
        background-position: 100%;
      }
    }
  }
`

export const FooterWrap = styled.footer`
  width: 100vw;
  height: ${s['footer-height']};

  .footer-container {
    ${s.flex('space-between', 'center')};
    height: 100%;

    font-size: 14px;
    color: var(--sim-text-secondary);
  }
`
