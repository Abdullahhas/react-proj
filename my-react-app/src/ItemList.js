import React from 'react'
import LineItems from './LineItems'


const ItemList = ({items  , handleChk , handleDelete}) => {
  return (
    <ul>
        {items.map((item) => (
           <LineItems 
           key = {item.id}
           item = {item}  
           handleChk = {handleChk}
           handleDelete = {handleDelete}

           />
        ))}
      </ul>
  )
}

export default ItemList
