import React  , {useState , useEffect} from "react";
import Square from "./Square";
import Input from "./Input";


function App() {
  const [colorValue  , setColorValue] = useState('')
  const [hexValue  , setHexValue] = useState('')
  const [isDarkText , setIsDarkText] = useState(true)

  // useEffect(()=>{
  //   console.log('render')
  // } , [])

  return (
    <div className="App">
    <Square
     colorValue={colorValue} 
     hexValue = {hexValue}
     isDarkText = {isDarkText}
     />
    <Input
     colorValue={colorValue}
    setColorValue={setColorValue}
    // hexValue= {hexValue}
    setHexValue={setHexValue}
    isDarkText = {isDarkText}
    setIsDarkText = {setIsDarkText}
      />
    </div>
  );
}

export default App;
