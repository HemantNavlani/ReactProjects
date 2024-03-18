import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(15)
  // let counter = 15 
// UI Updation ko react control karta hai 
  const addValue = () =>{
    // console.log("clicked",counter);
    // counter+=1;
    if (counter<20) setCounter(counter+1);

    //React interview question
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1 )
    setCounter(prevCounter => prevCounter + 1)
    setCounter (prevCounter => prevCounter + 1)

  }
  const removeValue = ()=>{
    if (counter>0) setCounter(counter-1)
  }
  return (
    <>
    <h1>Chai aur react</h1>
    <h2>Counter Value : {counter}</h2>

    <button
    onClick={addValue}
    >Add Value {counter}</button>
    <br />
    <button
    onClick={removeValue}
    >Remove Value {counter}</button>
    </>
  )
}

export default App
