import { createContext, useContext, useState } from "react";

export const AuthContext=createContext()

export const AuthProvider=({children})=>{
    const [token, setToken]=useState(localStorage.getItem("token"))
    const storeTokenInLS=(token)=>{
        return localStorage.setItem("token",token)
    }
    let isLoggedIn= !!token
    console.log("isLoggedinCheck",isLoggedIn)
    const LogOutUser=()=>{
        setToken("")
        return localStorage.removeItem("token")
    }
    return <AuthContext.Provider value={{isLoggedIn,storeTokenInLS,LogOutUser}}>
        {children}
    </AuthContext.Provider>
}

export const useAuth=()=>{
    const authContextValue= useContext(AuthContext)
    if(!authContextValue){
        throw new Error("You have used authcontext outside the provider")
    }
    return authContextValue
}