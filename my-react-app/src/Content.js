import React from 'react';

import ItemList from './ItemList';



function Content({items  , handleChk , handleDelete}) {
 
  return (
    <>
        {items.length ? (
        <ItemList
        items={items}
        handleChk={handleChk}
        handleDelete={handleDelete}
        />
        ): <p>your list is empty</p>}
    </>
  );
}

export default Content;
