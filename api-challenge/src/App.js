import {useState , useEffect} from 'react';
import Form from './Form';
import List from './List';
import Table from './Table';



function App() {
  const API_URL = 'https://jsonplaceholder.typicode.com/'
  const [reqType , setReqType] = useState("users")
  const [items , setItems] = useState([])

  useEffect(() => {
    const fetchItems = async () => {
      try {
        let response = await fetch(`${API_URL}${reqType}`)
        let data = await response.json()
         setItems(data)
      } catch (error) {
        console.log(error)
      }
      


    }
    fetchItems()
  } , [reqType])
  return (
    <div className="App">
      <Form 
      reqType = {reqType}
      setReqType = {setReqType}
      />

      {/* <List items = {items}/>  */}
      <Table items={items} />
    </div>
  );
}

export default App;
