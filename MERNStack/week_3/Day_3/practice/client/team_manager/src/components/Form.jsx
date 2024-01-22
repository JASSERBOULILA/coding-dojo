import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Form = () => {
    const [data, setData] = useState({
        player_name: '',
        pref_pos: ''
    });

    const [isFormValid, setFormValidity] = useState(false);
    const [errors, setErrors] = useState({ playerName: '', prefPosition: '' });

    const navigate = useNavigate();
    const handleForm = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8001/api/manager', data)
            .then(response => {
                console.log(response);
                navigate('/');
            }).catch(error => {
                console.log(error);
                const errorResponse = error.response.data;
                console.log(errorResponse, "error from Error");
                setErrors({
                    playerName: errorResponse.player_name ? errorResponse.player_name.message : '',
                    prefPosition: errorResponse.pref_pos ? errorResponse.pref_pos.message : ''
                });
                setFormValidity(false);
            });
    }

    const validateForm = () => {
        const isValid = data.player_name.trim() !== '' && data.pref_pos.trim() !== '';

        setFormValidity(isValid);
    }

    const handleInputChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
        validateForm(); // Validate the form on each input change
    }

    return (
        <div>
            <h1><Link to="/">Manages Players</Link></h1>
            <h1><Link to="/status/game">Manage Player Status</Link></h1>
            <fieldset>
                <form onSubmit={handleForm}>
                    <label htmlFor="player_name">Player Name</label>
                    <input type="text" name="player_name" value={data.player_name} onChange={handleInputChange} />
                    <span>{errors.playerName}</span>
                    <label htmlFor="pref_position">Pref Position</label>
                    <input type="text" name="pref_pos" value={data.pref_pos} onChange={handleInputChange} />
                    <span>{errors.prefPosition}</span>
                    <button type="submit" disabled={!isFormValid}>Add</button>
                </form>
            </fieldset>
        </div>
    );
}

export default Form;
