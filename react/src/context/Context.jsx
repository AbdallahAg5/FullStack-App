import { createContext, useContext, useState } from "react";


const UserContext=createContext({
user:null,
token:null,
setUser:()=>{},
TokenFunc:()=>{}

})



export const ContextProvider=({children})=>{
const [user,setUser]=useState({})
const [token,setToken]=useState(localStorage.getItem('token'))

const TokenFunc=(token)=>{
setToken(token)
if(token){
localStorage.setItem('token',token)
}
else{
localStorage.removeItem('token')
}
}
return (
<UserContext.Provider value={{ user, token, setUser, TokenFunc }}>
    {children}
</UserContext.Provider>
)
}


export const useStateContext=()=> useContext(UserContext)
