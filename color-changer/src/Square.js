import React from 'react'

const Square = ({colorValue , hexValue , isDarkText}) => {
  return (
    <section
    className='square'
    style = {{backgroundColor: colorValue
        , color: isDarkText ? '#000' : '#FFFFFF'
    }}
    >
      <p>
        {colorValue ? colorValue : "Empty value"}
      </p>

      <p>
      {hexValue ? hexValue : null}
      </p>
    </section>
  )
}

Square.defaultProps = {
    colorValue : "Empty color value"
}
export default Square
