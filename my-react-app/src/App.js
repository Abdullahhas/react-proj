import React  ,  {useState , useEffect} from 'react';

import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import AddItem from './AddItem';
import SearchIte from './SearchIte';


function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shopping list')))
  const [search , setSearch] = useState('')

  const [newItem , setnewItem] =  useState('')


  useEffect(() => {
    localStorage.setItem('shoppinglist', JSON.stringify(items));
  }, [items])

  const  addItem = (item) => {
    const id = items.length ? items[items.length -1].id + 1 : 1;
    const myNewItem = {id , checked : false , item}
    const listItems = [...items , myNewItem]
    setItems(listItems)
    
  }
  
  // Update the state to toggle the checked property
  const handleChk = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems); 
    
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
  
    
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!newItem) return 

    console.log(newItem)
    addItem(newItem)
    setnewItem('')

  }


  return (
    <>
    <Header title = 'Groceries'/>
    
    <AddItem
    newItem = {newItem}
    setnewItem = {setnewItem}
    handleSubmit = {handleSubmit}
    />
    <SearchIte search = {search} setSearch = {setSearch} />
    <Content
     items = {items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
     handleChk = {handleChk}
     handleDelete = {handleDelete}

    />
    <Footer length = {items.length}/>

    </>
    
  )
}

export default App;
