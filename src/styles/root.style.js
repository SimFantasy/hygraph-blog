import { createGlobalStyle } from 'styled-components'
import { normalize } from 'polished'
import s from './global.style'

const RootStyle = createGlobalStyle`
  ${normalize()};

  :root[data-color-mode='light'] {
    /* Typography */
    --sim-title: #262626;
    --sim-text-primary: #595959;
    --sim-text-secondary: #8c8c8c;
    --sim-text-disabled: #bfbfbf;

    /* Border & Divider */
    --sim-broder: #d9d9d9;
    --sim-divider: #f0f0f0;

    /* Background */
    --sim-bg-default: #ffffff;
    --sim-bg-secondary: #f5f5f5;
    --sim-bg-tertiary: #fafafa;

    /*- Gray -*/
    --sim-gray: #8c8c8c;
    --sim-gray-0: #ffffff;
    --sim-gray-1: #fafafa;
    --sim-gray-2: #f5f5f5;
    --sim-gray-3: #f0f0f0;
    --sim-gray-4: #d9d9d9;
    --sim-gray-5: #bfbfbf;
    --sim-gray-6: #8c8c8c;
    --sim-gray-7: #595959;
    --sim-gray-8: #434343;
    --sim-gray-9: #262626;
    --sim-gray-10: #1f1f1f;
    --sim-gray-11: #141414;
    --sim-gray-12: #000000;

    /*- Primary -*/
    --sim-primary: #42a5f5;
    --sim-secondary: #ba68c8;
    --sim-red: #ef5350;
    --sim-yellow: #ff9800;
    --sim-blue: #03a9f4;
    --sim-green: #4caf50;
  }

  :root[data-color-mode='dark'] {
    /* Typography */
    --sim-title: #ffffff;
    --sim-text-primary: #dbdbdb;
    --sim-text-secondary: #fafafa;
    --sim-text-disabled: #7d7d7d;

    /* Border & Divider */
    --sim-broder: #434343;
    --sim-divider: #303030;

    /* Background */
    --sim-bg-default: #000000;
    --sim-bg-secondary: #262626;
    --sim-bg-tertiary: #1d1d1d;
    
    /* Palette Main Color:5 */

    /*- Gray -*/
    --sim-gray: #8c8c8c;
    --sim-gray-0: #000000;
    --sim-gray-1: #141414;
    --sim-gray-2: #1f1f1f;
    --sim-gray-3: #262626;
    --sim-gray-4: #434343;
    --sim-gray-5: #595959;
    --sim-gray-6: #8c8c8c;
    --sim-gray-7: #bfbfbf;
    --sim-gray-8: #d9d9d9;
    --sim-gray-9: #f0f0f0;
    --sim-gray-10: #f5f5f5;
    --sim-gray-11: #fafafa;
    --sim-gray-12: #ffffff;

    --sim-primary: #3b8fd3;
    --sim-secondary: #a15bad;
    --sim-red: #ce4947;
    --sim-yellow: #db8403;
    --sim-blue: #0592d2;
    --sim-green: #4caf50;
  }

  ${s.mediaQuery({
    fontSize: ['100%', '87.5%', '62.5%']
  })}

  body,html {
    height: 100%;
  }

  body {
    font-family: ${s['font-family']};
    font-weight: 400;
    line-height: 1.5;

    background-color: var(--sim-bg-secondary);
    color: var(--sim-text-primary);
  }

  a {
    text-decoration: none;
    color: var(--sim-text-primary);

    &:hover {
      color: var(--sim-title);
    }
  }

  button,input, select, textarea {
    outline: none;
  }

  .container {
    margin: 0 auto;
    ${s.mediaQuery({
      width: s['page-width']
    })};
  }

  .page-block {
    margin-bottom: ${s['space-2xl']};
  }

  .titlebar {
    ${s.flex('space-between', 'center')};
    margin-bottom: ${s['space-lg']};
    width: 100%;
    height: 48px;

    .title {
      flex: 1;
      ${s.flex('flex-start', 'center')};
      height: 100%;
      font-size: 24px;
      color: var(--sim-title);
      font-weight: 600;
    }

    .title-secondary {
      flex: 0 0 auto;
      ${s.flex('flex-end', 'center')};
      height: 100%;
    }

  }

  .divider {
    margin: ${s['space-2xl']} auto;
    width: 320px;
    height: 1px;
    border-bottom: 1px solid var(--sim-broder);
  }

  .spin-container {
    box-sizing: border-box;
    ${s.flex('center', 'center')};
    padding: ${s['space-xl']};
    width: 100%;
  }
`

export default RootStyle
