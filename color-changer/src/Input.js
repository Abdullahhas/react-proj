import React from 'react'
import colorNames from 'colornames'

const Input = ({colorValue , setColorValue , setHexValue , isDarkText , setIsDarkText}) => {
  return (
   <form
   onSubmit={(e) => e.preventDefault() }
   >
    <label htmlFor="">Add Color name</label>
    <input  
     autoFocus
     type="text" 
     required
     placeholder='Add Color name'
     value={colorValue}
     onChange={(e) => 
        {
        setColorValue(e.target.value)
        setHexValue(colorNames(e.target.value))
    
    }
     }

      />

      <button
      type='button'
      onClick={()=> setIsDarkText(!isDarkText)}
      >toggle button</button>

   </form>
  )}
export default Input
