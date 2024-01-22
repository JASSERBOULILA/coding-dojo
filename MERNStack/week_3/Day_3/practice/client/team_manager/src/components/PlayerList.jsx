import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
const PlayerList = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        axios.get('http://localhost:8001/api/managers')
            .then(response => {
                console.log(response);
                setData(response.data);
            }).catch()
    }, [])
    const deleted = (id) => {
        axios.delete(`http://localHost:8001/api/managers/${id}/delete`)
            .then(response => {
                console.log(response);
                setData(data.filter((element, idx) => element._id !== idx));
            }).catch(error => {
                console.log(error);
            });
    }
    return (
        <div>
            <Link to="/">List</Link>
            <Link to="/player/addplayer">Add Player</Link>
            <table>
                <thead>
                    <tr>
                        <th>Team Name </th>
                        <th>Preferred Position</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((element, idx) => (
                        <tr key={idx}>
                            <td>
                                <Link to={`/player/${element._id}/show`}>{element.player_name}</Link>
                            </td>
                            <td>
                                {element.pref_pos}
                            </td>
                            <td>
                                <button onClick={() => deleted(element._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div >
    )
}

export default PlayerList
