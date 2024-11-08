import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function Myapp(){
  return(
    <>
    <h1>hello</h1>
    </>
  )
}
const reactElement = React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'click me to visit google'
)
//type,key,ref,props
createRoot(document.getElementById('root')).render(
    <StrictMode>
      reactElement
      <App/>
    </StrictMode>
    
  
)
