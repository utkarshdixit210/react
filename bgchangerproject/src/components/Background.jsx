import React from 'react'
import './background.css'
import { useState } from 'react'
function Background() {
    const [color,setColor]=useState("#ff0000")

  return (
    <>
    
   <div className=' h-svh' style={{backgroundColor:color}}></div>
    <button onClick={()=>setColor("#ff0000")}>red</button>
    <button onClick={()=>setColor("#0000ff")}>blue</button>
    <button onClick={()=>setColor("#008000")}>green</button>
    <button onClick={()=>setColor("#ffc0cb")}>pink</button>
    
    </>
  )
}

export default Background
