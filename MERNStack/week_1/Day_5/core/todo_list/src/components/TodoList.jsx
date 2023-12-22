import React, { useState } from 'react'


const TodoList = (props)=>{
    const [checked,setChecked] = useState(false)
    console.log(props.profile)
    const change = (item)=>{
        document.getElementById(`${item}`).remove();
    }
    const changeC = (idx)=>{
        if(checked){
            setChecked(false)
        }else{
            setChecked(true)
        }
    }
    return (
        <div>
            {props.profile.map((element, idx) => (
                <div key={idx} id={idx}>
                    {checked ? (
                        <p style={{ textDecoration: 'line-through' }}>{element}</p>
                    ) : (
                        <p>{element}</p>
                    )}
                    <input type='checkbox' onClick={changeC(idx)} value="checkBox"></input>
                    <button onClick={() => change(idx)}>
                        Delete
                    </button>
                </div>
            ))}
        </div>
    )
}



export default  TodoList
