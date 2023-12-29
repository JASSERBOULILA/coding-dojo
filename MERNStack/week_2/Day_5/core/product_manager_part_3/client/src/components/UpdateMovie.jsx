import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateMovie = () => {
    const {id} = useParams();
    const [data,setData] = useState({});
    const navigate = useNavigate();
    useEffect(() => {
        axios.get(`http://localhost:8001/api/products/${id}`)
            .then(res => {
                setData(res.data);
            })
            .catch(err => console.error(err));
    }, [id]);
    const update = (e)=>{
        e.preventDefault();
        axios.put(`http://localhost:8001/api/products/${id}`,data)
        .then(prod=>{
            console.log(prod);
            navigate("/");
        }).catch(error=>{
            console.log(error);
        })
    }
    
    return (
        <div>
            <fieldset>
                <form onSubmit={update}>
                    <label htmlFor="title">Title</label>
                    <input type="text" name='title' value={data.title} 
                    onChange={(e)=>setData({...data,title:e.target.value})}/>
                    <label htmlFor="price">Price</label>
                    <input type="number" name='price' value={data.price} 
                    onChange={(e)=>setData({...data,price:e.target.value})}/>
                    <label htmlFor="description">Description</label>
                    <input type="text" name='description' value={data.description} 
                    onChange={(e)=>setData({...data,description:e.target.value})}/>
                    <button>Edit</button>
                </form> 
            </fieldset>
        </div>
    )
}

export default UpdateMovie
