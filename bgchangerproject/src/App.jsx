import { useState } from 'react'
import Background from './components/Background'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Background/>
    </>
  )
}

export default App
