import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MoreForm from './components/validate'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <MoreForm />
    </>
  )
}

export default App
