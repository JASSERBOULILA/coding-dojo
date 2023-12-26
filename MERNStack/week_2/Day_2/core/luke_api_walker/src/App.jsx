import { useState } from 'react'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
function App() {
  return (
    <>
    <Routes >
      <Route path="/" element={<Home />}/>
      <Route path="/error" element={<h1>Error</h1> }/>
    </Routes>
    </>
      )
}

      export default App
