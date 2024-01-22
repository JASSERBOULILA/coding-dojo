import { useContext, useState } from "react" 

export const userContext = () =>{
    const User = createContext()
    const [userId, setUserId] = useState("")
    
    
    return (
        <User.Provider value = {userId}>
            {children}
        </User.Provider>
    )

}

