import React from 'react'
import MDPreview from '@uiw/react-markdown-preview'

const MarkdownPreview = ({ source }) => {
  return (
    <>
      <MDPreview source={source} />
    </>
  )
}

export default MarkdownPreview
