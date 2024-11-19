import React from 'react'
import { FaTrashAlt } from 'react-icons/fa';

const LineItems = ({item  , handleChk , handleDelete}) => {
  return (
    <li className='item' >
    <input
      type="checkbox"
      checked={item.checked}
      onChange={() => handleChk(item.id)} // Trigger handleChk on change
    />
    <label
      style={item.checked ? { textDecoration: 'line-through' } : { textDecoration: 'none' }}
      htmlFor=""
    >
      {item.item}
    </label>
    <FaTrashAlt role="button" tabIndex="0" onClick={() => handleDelete(item.id)} />
  </li>
  )
}

export default LineItems
