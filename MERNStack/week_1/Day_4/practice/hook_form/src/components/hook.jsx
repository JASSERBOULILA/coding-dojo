import { useState } from "react"


const Hook = () => {
    const [profile, setProfile] = useState([{
        "first_name": "","last_name":"","email":"","password":"","confirm_password":""
    }])
    const [first_name, setFirstName] = useState("")
    const [lastname, setLastName] = useState("")
    const [email, setemail] = useState("")
    const [password, setPassword] = useState(0)
    const [confirmpassword, setConfirmPassword] = useState(0)
    const submitHandler = (e)=>{
        e.preventDefault();
        setProfile([...profile,first_name,lastname,email,password,confirmpassword])
        setFirstName('')
        setLastName('')
        setPassword('')
        setConfirmPassword('')
        setemail('')
    }
    return (
        <>
            <fieldset>
                <form onSubmit={submitHandler}>
                    <label >First Name :
                    </label>
                    <input type="text" onChange={(e)=>setFirstName(e.target.value)}/>
                    <label >Last Name:
                    </label>
                    <input type="text" onChange={(e)=>setLastName(e.target.value)}/>
                    <label > Email
                    </label>
                    <input type="email" onChange={(e)=>setemail(e.target.value)}/>
                    <label >
                        Password
                    </label>
                    <input type="password" onChange={(e)=>setPassword(e.target.value)}/>
                    <label >
                        Confirm password
                    </label>
                    <input type="password" onChange={(e)=>setConfirmPassword(e.target.value)}/>
                    <p>First_Name : {first_name}</p>
                    <p>last Name : {lastname}</p>
                    <p>Email : {email}</p>
                    <p>Password : {password!=""?"password":""}</p>
                    <p>Password : {confirmpassword==password?"matching password":"wrong matching"}</p>
                </form>
            </fieldset>
        </>
    )
}

export default Hook