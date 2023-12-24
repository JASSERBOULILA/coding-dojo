import { useState } from 'react'

const Box = (props)=>{
    console.log(props.profiles.color)
    console.log(props.profiles.number)
    return (
        <>
        <div style={{display:'flex' , marginTop:'10px'}}>
            <div key={props.key} style={{ backgroundColor: props.profiles.color, 
                height:props.profiles.number + 'px',
                width:props.profiles.number+ 'px'}}>
            </div>
        </div>
        </>
    );
}


export default Box