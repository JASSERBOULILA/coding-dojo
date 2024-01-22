import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Register = (props) => {
    const navigate = useNavigate();
    const handleForm = (e)=>{
        e.preventDefault();
        axios.post('http://localhost:8001/api/new',props.data).then(data=>{
            console.log(data.data.user);
            console.log("the data has been stored",data.data.user);
            navigate('/login');
        }).catch(error=>{
            console.log(error);
        })
    }
    return (
        <div>
            <fieldset>
                <form onSubmit={handleForm}>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    Name :
                                </td>
                                <td>
                                    <input type='text' name="name" value={props.data.name} onChange={(e) => props.setData({ ...props.data, name: e.target.value })} />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Phone Number :
                                </td>
                                <td>
                                    <input type='number' name="phone" value={props.data.phone} onChange={(e) => props.setData({ ...props.data, phone: e.target.value })} />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    password :
                                </td>
                                <td>
                                    <input type='password' name="pw" value={props.data.pw} onChange={(e) => props.setData({ ...props.data, pw: e.target.value })} />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <button>Register</button>
                </form>
            </fieldset>
        </div>
    )
}

export default Register
