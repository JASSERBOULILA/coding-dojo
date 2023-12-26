import React from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
const Home = () => {
    const navigate = useNavigate();
    const [data, setData] = useState(null);
    const [planet, setPlanet] = useState("people");
    const [id, setId] = useState(0)
    console.log(planet)
    const api = () => {
        console.log(planet, "**", id)
        axios.get(`https://swapi.dev/api/${planet}/${id}/`)
            .then(response => {
                console.log(response.data)
                setData(response.data)
            })
            .catch(error => {
                console.log(error)
                navigate('/error')
            })
    }
    const handleSelectChange = (e) => {
        setPlanet(e.target.value)
    }

    // {data != null ? (planet == "people") ? (<h1>Name : {data.name}
    //     , Height : {data.height}
    //     ,Hair Color : {data.hair_color}, Mass :{data.mass},Skin Color : {data.skin_color}
    // </h1>) : ("") : (planet=="planets")? (<h1>Name {data.name} 
    //     , Climate : {data.climate} ,
    //     Terrain : {data.terrain},
    //     Surface Water : {data.surface_water},
    //     Population : {data.population} 
    //     </h1>) : (planet=="starships" ) ? (<h1>Name : {data.name} 
    //     , Model : {data.model} ,
    //     Passenger : {data.passengers} </h1>) :""}
    return (
        <>
            <div>
                <h1>Search For </h1>
                <select name="planet" id="planet" onChange={handleSelectChange}>
                    <option value="people" >people</option>
                    <option value="planets" >planets</option>
                    <option value="starships" >starships</option>
                </select>
                <h1>Id :</h1>
                <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
                <button onClick={api}>Search</button>
            </div>
            {data != null ? (planet == "people") ? (<h1>Name : {data.name}
                , Height : {data.height}
                ,Hair Color : {data.hair_color}, Mass :{data.mass},Skin Color : {data.skin_color}
            </h1>) : ("") : ""}

            {/* this for planets planets  */}
            {data != null ? (planet == "planets") ? (<h1>Name {data.name} 
            , Climate : {data.climate} ,
            Terrain : {data.terrain},
            Surface Water : {data.surface_water},
            Population : {data.population} 
            </h1>) : ("") : ""}
            {/* this for starships */}
            {data != null ? (planet == "starships") ? (<h1>Name : {data.name} 
            , Model : {data.model} ,
            Passenger : {data.passengers} </h1>) : ("") : ""}
        </>
    )
}

export default Home
