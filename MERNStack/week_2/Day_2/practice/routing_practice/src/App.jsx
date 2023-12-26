import { useState } from 'react'
import './App.css'
import {
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";
import Home from './components/Home';
import Number from './components/Number'
import Hello from './components/Hello';


function App() {

  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/" element={<Navigate to={"/home"}/>}/>
        <Route path="/:number" element={<Number />}/>
        <Route path="/:hello/:text/:background" element={<Hello />}/>
      </Routes>
    </>
  )
}

export default App
