import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './components/TodoList'
function App() {
  const [profile,setProfile] = useState([])
  const [todo,setTodo] = useState('')
  const createUser = (e)=>{
    e.preventDefault()
    setProfile([...profile,todo])
  }
  return (
    <>
      <fieldset>
        <form onSubmit={createUser}>
          <input type="text" onChange={(e)=>setTodo(e.target.value)}/>
          <button>Add</button>
          <TodoList profile={profile} />
        </form>
        
      </fieldset>
    </>
  )
}

export default App
