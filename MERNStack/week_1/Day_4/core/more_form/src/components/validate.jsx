import { useState } from "react"

const MoreForm = (props)=>{
    const [profile, setProfile] = useState([{
        "first_name": "","last_name":"","email":"","password":"","confirm_password":""
    }])
    const [first_name,setFirstName] = useState("")
    const [lastName,setlastName] = useState("")
    const [email,setEmail] = useState('')
    const [password,setpassword] = useState('')
    const [confirmpassword,setConfirmPassword] = useState('')
    const validate = (e)=>{
        e.preventDefault()
        setProfile([...profile,first_name,lastName,email,password,confirmpassword])
        setFirstName('')
        setlastName('')
        setEmail('')
        setpassword('')
        setConfirmPassword('')
    }
    return (
        <>
            <fieldset>
                <form onSubmit={validate}>
                    <label>First Name</label>
                    <input type="text" onChange={(e)=>setFirstName(e.target.value)} />
                    <h4>{first_name.length==0?"":
                            first_name.length<3?"First name must be at leats 2 charachter":''}</h4>
                    <label>Last Name</label>
                    <input type="text" onChange={(e)=>setlastName(e.target.value)} />
                    <h4>{lastName.length==0?"":
                            lastName.length<3?"last name must be at leats 2 charachter":''}</h4>
                    <label>Email</label>
                    <input type="text" onChange={(e)=>setEmail(e.target.value)} />
                    <h4>{email.length==0?"":
                            email.length<3?"email  must be at leats 2 charachter":''}</h4>
                    <label>Password</label>
                    <input type="password" onChange={(e)=>setpassword(e.target.value)}/>
                    <h4>{password.length==0?"":
                            password.length<9?"the password must be at least 8 long":''}</h4>
                    <label>Password</label>
                    <input type="password" onChange={(e)=>setConfirmPassword(e.target.value)}/>
                    <h4>{confirmpassword.length==0?"":
                            password!=confirmpassword?"password must match":''}</h4>
                </form>
            </fieldset>
        </>
    )
}

export default MoreForm;