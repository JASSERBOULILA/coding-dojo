import React,{useState} from "react";

const User= (props)=>{
    const [count, setCount] = useState(props.user)
    const increase =(index)=>{
        console.log(index)
        console.log(props.user[index].age)
        setCount(props.user[index].age +=1);
    }
    return(
        <>
            <div >
                {props.user.map((element,idx) =>{return (
                    <div  key={idx}>
                        <p>first Name</p>
                        <p>{element.first_Name}</p>
                        <p>last Name</p>
                        <p>{element.Last_Name}</p>
                        <p>age</p>
                        <p>{element.age}</p>
                        <p>Hair Color</p>
                        <p>{element.hair_color}</p>
                        <button onClick={()=>increase(idx)}>Happy Birthday</button>
                    </div>
                )})}
            </div>
        </>
    )
}


export default User