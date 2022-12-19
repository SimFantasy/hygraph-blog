import { rem } from 'polished'
import facepaint from 'facepaint'

const mediaQuery = facepaint([
  // '@media(max-width: 1399.98px)',
  // '@media(max-width: 1199.98px)',
  '@media(max-width: 991.98px)',
  '@media(max-width: 767.98px)',
  '@media(max-width: 575.98px)'
])

const ellipsis = (line, width = '100%') => {
  if (line === 1) {
    return `
      max-width:${width};
      line-height:18px;
      overflow:hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    `
  }
  if (line > 1) {
    return `
      max-width:${width};
      line-height:18px;
      display: -webkit-box !important;
      overflow:hidden;
      text-overflow:ellipsis;
      -webkit-line-clamp: ${line};
      -webkit-box-orient: vertical;
    `
  }
}

const flex = (justifyContent, alignItems) => {
  return `
    display: flex;
    justify-content: ${justifyContent};
    align-items: ${alignItems}
  `
}

const gridCols = (col, gap = '20px') => {
  if (col === 'none') {
    return `
      display: grid;
      grid-template-columns: none;
      `
  } else {
    return `
        display: grid;
        gap: ${gap};
        grid-template-columns: repeat(${col}, minmax(0, 1fr));
      `
  }
}

const gridSpan = span => {
  if (span === 'auto') {
    return `
      grid-column: auto;
    `
  } else if (span === 'full') {
    return `
      grid-column: full;
    `
  } else {
    return `
      grid-column: span ${span} / span ${span};
    `
  }
}

const gridStart = span => {
  if (span === 'auto') {
    return `
      grid-column-start: auto;
    `
  } else if (span === 'full') {
    return `
      grid-column-start: full;
    `
  } else {
    return `
      grid-column-start: ${span};
    `
  }
}

const gridEnd = span => {
  if (span === 'auto') {
    return `
      grid-column-end: auto;
    `
  } else if (span === 'full') {
    return `
      grid-column-end: full;
    `
  } else {
    return `
      grid-column-end: ${span};
    `
  }
}

const bgBlur = (rgba, val) => {
  return `
    background-color: rgba(${rgba});
    -webkit-backdrop-filter: blur(${val});
    backdrop-filter: blur(${val});
  `
}

export default {
  // style
  radius: '6px',
  'radius-xs': '2px',
  'radius-sm': '4px',
  'radius-md': '6px',
  'radius-lg': '8px',
  'radius-xl': '10px',
  'radius-2xl': '16px',
  'radius-full': '50px',
  rounded: '50%',

  'font-family':
    'Montserrat, -apple-system, BlinkMacSystemFont, segoe ui, Roboto, Oxygen, Ubuntu, Cantarell, open sans, helvetica neue, sans-serif',
  // 'font-family': 'Montserrat,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',

  // size
  'header-height': rem('64px'),
  'footer-height': rem('64px'),

  'space-xxs': rem('4px'),
  'space-xs': rem('8px'),
  'space-sm': rem('16px'),
  'space-md': rem('24px'),
  'space-lg': rem('32px'),
  'space-xl': rem('48px'),
  'space-2xl': rem('56px'),
  'space-3xl': rem('64px'),
  'space-4xl': rem('72px'),
  'space-5xl': rem('80px'),

  'mobile-width': '576px',
  'table-width': '992px',

  'page-width': ['768px', '86vw', '90vw'],

  // function
  flex,
  mediaQuery,
  bgBlur,
  ellipsis,
  gridCols,
  gridSpan,
  gridStart,
  gridEnd
}
