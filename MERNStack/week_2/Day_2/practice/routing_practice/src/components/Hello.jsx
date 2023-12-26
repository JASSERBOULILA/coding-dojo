import React from 'react'
import { useParams } from 'react-router-dom'
const Hello = () => {
    const {hello,text,background}= useParams();
    console.log(text)
    return (
        <div style={{backgroundColor:`${background}`}}>
            <p style={{Color:`${text}`}}>The Word is  : {hello} </p>
        </div>
    )
}

export default Hello
