import { createContext, useState } from "react";

export const MyStore = createContext()

export const AuthContext =({children}) =>{


    const [registerUser, setRegisterUser] = useState(()=>{
       return JSON.parse(localStorage.getItem('registerUser')) ||[]
    })
    
    const [loggedInUser, setLoggedInUser] = useState(()=>{
        return JSON.parse(localStorage.getItem('loggedInUser'))
    })
console.log(loggedInUser)
    

    return <MyStore.Provider value={{registerUser, setRegisterUser,loggedInUser, setLoggedInUser}} >
{children}
    </MyStore.Provider>
}