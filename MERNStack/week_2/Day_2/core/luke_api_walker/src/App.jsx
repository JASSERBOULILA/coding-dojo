import { useState } from 'react'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import Display from './components/Display'
function App() {
  const [data,setData] = useState("");
  return (
    <>
    <Routes >
      <Route path="/" element={<Home setData = {setData} />}/>
      <Route path="/:planet/:id" element={<Display data={data} />} />
      <Route path="/error" element={<h1>Error</h1> }/>
    </Routes>
    </>
      )
}

      export default App
