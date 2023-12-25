import { useState } from 'react'
import './App.css'
import axios from "axios"

function App() {
  const [axiosSuperHeros, setAxiosSuperHeros] = useState([])
  const axiosAPI = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon/")
      .then(response => {
        console.log("AXIOS RESPONSE :", response.data.results)
        setAxiosSuperHeros(response.data.results)
      })
      .catch(error => console.log("AXIOS ERROR:", error))
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
    <>
      <fieldset>
        <legend><h1>🦹🏼🦸🏼‍♀️ SuperHeros API 🦹🏼🦸🏼‍♀️</h1></legend>
        {/* <button onClick={fetchAPI}>fetch API</button> */}
        <button onClick={() => handleClick(axiosAPI, axiosSuperHeros, setAxiosSuperHeros)}>fetch API</button>
        <fieldset style={{ backgroundColor: "cornflowerblue" }}>
          <legend>
            <h4>Fetch Pokemon</h4>
          </legend>
          <table>
            <thead>
              <tr>
                <th>Name</th>
              </tr>
            </thead>
            {axiosSuperHeros.map((hero, idx) =>
              <tbody>
                <tr key={idx}>
                  <td>{hero.name}</td>
                </tr>
              </tbody>)}
          </table>
        </fieldset>
      </fieldset>
    </>
  )
}

export default App
