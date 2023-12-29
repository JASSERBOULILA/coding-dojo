import { useState } from 'react'
import {Routes,Link,Route, Navigate} from 'react-router-dom'
import './App.css'
import Form from './components/Form'

function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate to="/product"/>}/>
        <Route path="/product" element={<Form />}/>
      </Routes>
    </>
  )
}

export default App
