import React  ,  {useState , useEffect} from 'react';

import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import AddItem from './AddItem';
import SearchIte from './SearchIte';


function App() {

  const API_URL = 'http://localhost:3500/items'
  const [items, setItems] = useState([])
  const [search , setSearch] = useState('')

  const [newItem , setnewItem] =  useState('')
  const [fetchError , setFetchError] =  useState(null)
  const [isLoading , setIsLoading] = useState(true)



  useEffect(() => {
    const fetchItems = async ()=>{
      try {
        const response = await fetch(API_URL)
        if(!response.ok) throw Error('Did not receive expected data')
        const listItems = await response.json()
        console.log(listItems)
        setItems(listItems)
        setFetchError(null)
      } catch (error) {
        setFetchError(error.message)
      }finally{
        setIsLoading(false)
      }
  
    }

    setTimeout(() => {
      
      (async ()=> await fetchItems())();
      
    }, 2000);
    
  }, [])

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
    <main>
      {isLoading && <p>Loading items...</p>}
      {fetchError && <p style={{color : 'red'}}>{`Error : ${fetchError}`}</p>}
      {!fetchError && !isLoading && <Content
     items = {items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
     handleChk = {handleChk}
     handleDelete = {handleDelete}

    />}
    </main>
    <Footer length = {items.length}/>

    </>
    
  )
}

export default App;
