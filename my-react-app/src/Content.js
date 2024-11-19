import React from 'react';

import ItemList from './ItemList';



function Content({items  , handleChk , handleDelete}) {
 
  return (
    <main>
        {items.length ? (
        <ItemList
        items={items}
        handleChk={handleChk}
        handleDelete={handleDelete}
        />
        ): <p>your list is empty</p>}
    </main>
  );
}

export default Content;
