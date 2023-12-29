import { useState,useEffect } from 'react'
import './App.css'

function App() {
  const [fetchSuperHeros, setFetchSuperHeros] = useState([])
  const fetchAPI = () => {
    fetch("https://pokeapi.co/api/v2/pokemon/?offset=20&limit=807")
      .then(response => {
        console.log("RESPONSE :", response);
        return response.json()
      })
      .then(response => {
        console.log("FETCH API RESPONSE AS JSON : ", response.results)
        setFetchSuperHeros(response.results)
      })
      .catch(error => console.log("FETCH API ERROR :", error))
  }
  const handleClick = (apiCall,stateVariable, setStateVariable) => {
    console.log("State Variable");
    if(stateVariable.length !=0){
      setStateVariable([])
    } else{
      apiCall()
    }
  }
  return (
    <fieldset>
      <legend><h1>🦹🏼🦸🏼‍♀️ SuperHeros API 🦹🏼🦸🏼‍♀️</h1></legend>
      {/* <button onClick={fetchAPI}>fetch API</button> */}
      <button onClick={() => handleClick(fetchAPI, fetchSuperHeros, setFetchSuperHeros)}>fetch API</button>
      <fieldset style={{backgroundColor:"cornflowerblue"}}>
        <legend>
          <h4>Fetch Super Heros Array</h4>
        </legend>
        <table>
          <thead>
            <tr>
              <th>Name</th>
            </tr>
          </thead>
          {fetchSuperHeros.map((hero,idx) => 
          <tbody>
          <tr key={idx}>
            <td>{hero.name}</td>
          </tr>
          </tbody>)}
        </table>
      </fieldset>
    </fieldset>
  )
}

export default App
