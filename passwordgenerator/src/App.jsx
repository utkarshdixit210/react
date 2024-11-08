import React ,{ useState } from 'react'
import './App.css'
import { useCallback } from 'react';
import { useEffect } from 'react';

function App() {
     const [length,setLength]=useState(8)
     const[numberAllowed,setnumberAllowed]=useState(false);
     const[charAllowed,setcharAllowed]=useState(false);
     const[password,setPassword]=useState("")



     const passwordGenerator=useCallback(()=>{

      let pass="";
      let str="ABCDEFGHIJKLMNOPabcdefghijklmnopqrstuvwxyz";
      if(numberAllowed) str+="1234567890"
      if(charAllowed) str+="~!@#$%^&*()_+"
      for(let i=0;i<=length;i++)
      {
        let char=Math.floor(Math.random()*str.length()+1);
        pass+=str.charAt(char);
      }

      setPassword(pass)
    },[length,numberAllowed,charAllowed])

useEffect(()=>{
  passwordGenerator()
},length,numberAllowed,charAllowed,passwordGenerator)


  return (
    <>
   
    <h1 className='text-white'>hello</h1>
  
    </>
  )
}

export default App
