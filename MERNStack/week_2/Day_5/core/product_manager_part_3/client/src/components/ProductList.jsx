import React from 'react'
import axios from 'axios';
import { useState,useEffect } from 'react';
import { Link ,useNavigate} from 'react-router-dom';
const ProductList = (props) => {
    const [prod, setProd] = useState(props.prod)
    console.log(props.id)
    const navigate = useNavigate();
    const deletes = (e,id)=>{
        e.preventDefault();
        axios.delete(`http://localhost:8001/api/products/${id}/delete`)
        .then(response=>{
            console.log(response);
            navigate('/product/all');
        }).catch(error=>{
            console.log(error);
        })
        document.getElementById('div').remove();
    }
    console.log(prod);
    return (
        <div id='div'>
            <Link to={`/products/${props.id}`} >{prod.description}</Link>
            <Link to={`/products/${props.id}/edit`} > <button key={props.id}>Edit</button></Link>
            <button onClick={(e)=>deletes(e,props.id)}>Delete</button>
        </div>
    )
}

export default ProductList;

