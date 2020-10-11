// Styling
// http://localhost:3000/isolated/exercise/05.js

import React from 'react'
import '../box-styles.css'

function Box({size, className = '', style, ...otherProps}) {
  const sizeClassName = size ? `box--${size}` : ''
  return (
    <div
      className={`${className} box ${sizeClassName}`}
      style={{fontStyle: 'italic', ...style}}
      {...otherProps}
    />
  )
}

const smallBox = (
  <Box size="small" style={{backgroundColor: 'lightBlue'}}>
    small lightblue box
  </Box>
)
const mediumBox = (
  <Box size="medium" style={{backgroundColor: 'pink'}}>
    medium pink box
  </Box>
)
const largeBox = (
  <Box size="large" style={{backgroundColor: 'orange'}}>
    large orange box
  </Box>
)

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
      <Box>sizelessBox</Box>
    </div>
  )
}

export default App
