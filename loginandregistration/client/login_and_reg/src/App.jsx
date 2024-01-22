import { createContext, useState } from 'react'
import { Route, Routes, Link, Navigate, Router } from 'react-router-dom'
import './App.css'
import Register from './components/Register'
import Login from './components/Login'
import Dashboard from './components/Dashboard'

export const User = createContext()
function App() {
  const [data, setData] = useState([]);
  const [userId, setUserId] = useState(""); 
  console.log(userId)
  return (
          <User.Provider value={userId}>
    <>

        <Routes>
          <Route path="/" element={<Navigate to="/register" />} />
          <Route path="/register" element={<Register setData={setData} data={data} />} />
          <Route path="/login" element={<Login setUserId={setUserId}/>} />
          <Route path="/logined" element={<h1>You Have Logined {JSON.stringify(userId)}</h1>} />
          <Route path="/dash/:id" element={<Dashboard userId = {userId}/>} />

        </Routes>
    
    </>
          </User.Provider>
  )
}

export default App
