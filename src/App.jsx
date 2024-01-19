import { useState } from 'react'
import './App.css'

function App() {
  let [counter , setCounter] = useState(0);
   const add = ()=>{ 
    if (counter == 20){
      counter = null;
    }else{
      setCounter(counter + 1);
    }
   }
   const sub = () =>{
    if (counter == -20){
      counter = null;
    }else{
      setCounter(counter - 1);
    }

   }
   

  return (
    <>
     <p>count:{counter}</p>
     <button onClick={add}>count number</button>
     <button onClick={sub}>decrease number </button>
    </>
  )
}

export default App
