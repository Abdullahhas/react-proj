import React from 'react'
import {FaPlus} from 'react-icons/fa'

const AddItem = ({newItem , setnewItem , handleSubmit}) => {
  return (
    <form className='addForm' onSubmit={handleSubmit}>
        <label htmlFor="addItem">Add Item</label>
        <input
        type="text" 
        id="addItem"
        autoFocus
        placeholder='Add Item'
        required
        value={newItem}
        onChange={(e) => setnewItem(e.target.value)}
        
        />

        <button
        type='submit'
        aria-label='Add Item'


        >
            <FaPlus/>
        </button>
    </form>
  )
}

export default AddItem
