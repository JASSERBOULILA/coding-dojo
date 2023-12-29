import { useState } from 'react'
import './App.css'
import First from './components/first'

function App() {
  const user=[{"firstName":'Doe',"lastName":'Jane',"age":19,"hairColor":'blue'}
  ,{"firstName":'Smith',"lastName":'John',"age":28,"hairColor":'black'},
  {"firstName":'Filmore',"lastName":'Miliard',"age":50,"hairColor":'brown'},
  {"firstName":'Smith ',"lastName":'Maria',"age":62,"hairColor":'brown'}]
  return (
    <>
      <div className="App">
        <First user={user} />
      </div>
    </>
  )
}

export default App
