import React, { useState } from 'react'
const FromComponent = ({ addPlan,input,setInput,error }) => {
    const formHandler = (e) =>{
        e.preventDefault()
        console.log("Event : ", e);
        console.log("Event Target : ", e.target.value);
        addPlan(input)
        setInput("");
    }
    return (
        <div>
            <form onSubmit={formHandler}>
                <input type="text" name="plans" onChange={(e) => setInput(e.target.value)} 
                value={input} />
                <h2>{error}</h2>
                <button>Add</button>
            </form>
        </div>
    )
}

export default FromComponent