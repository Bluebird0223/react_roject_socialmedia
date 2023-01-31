import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext()
export const AuthContextProvider = ({children})=>{
    const [currentuser,setCurrentUser]=useState( JSON.parse(localStorage.getItem('user')) || null)
    
    const login=()=>{
        //to do
        setCurrentUser({id:1,name:'tomharry',profilePic:'https://images.pexels.com/photos/15171470/pexels-photo-15171470.jpeg'})
    }
    
    useEffect(()=>{
        localStorage.setItem('user',JSON.stringify(currentuser))

    },[currentuser])

    return(
        <AuthContext.Provider value={{currentuser, login }}>{children}</AuthContext.Provider>
    )
}