import { useState } from 'react'
import './App.css'
import {Routes,Route,Link , Navigate} from 'react-router-dom'
import PlayerList from './components/PlayerList'
import Form from './components/Form'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/players/list"/>}/>
        <Route path="/players/list" element={<PlayerList />}/>
        <Route path="player/addplayer" element={<Form />}/>
      </Routes>
    </>
  )
}

export default App
