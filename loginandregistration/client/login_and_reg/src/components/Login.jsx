import React, { createContext } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Login = ({setUserId}) => {
    const [data, setData] = useState([]);
    const [id,setId] = useState("");
    const navigate = useNavigate();
    const handle = (e)=>{
        e.preventDefault();
        axios.post('http://localhost:8001/api/login',data)
        .then(response=>{
            const {user,token} = response.data;
            console.log(user,token);
            setUserId(response.data.user._id);
            navigate(`/dash/${response.data.user._id}`);
        })
        .catch(error=>{
            console.log(error);
        });
    }
    return (
        <div>
            <form onSubmit={handle}>
                <input type="text" placeholder='name' name='name' value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })}/>
                <input type="number" placeholder='PhoneNumber' name='phone' value={data.phone} onChange={(e) => setData({ ...data, phone: e.target.value })}/>
                <input type="number" placeholder='password' name='pw' value={data.pw} onChange={(e) => setData({ ...data, pw: e.target.value })}/>
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login
