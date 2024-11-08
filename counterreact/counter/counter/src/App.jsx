import React,{ useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

 let [value,setValue]=useState(5)


 const addValue=()=>{
  setValue(value+1);
 }

 const removeValue=()=>{
  if(value>0){
  setValue(value-1);
  }
 }

  return (
    <>
      <h1>Utkarsh</h1>
      <h2>value : {value}</h2>
      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
