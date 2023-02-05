import { createContext, useState } from "react";


const UserContext=createContext({
User:null,
token:null
})
const [user,setUser]=useState({})
const [token,setToken]=useState(null)


const TokenFunc=(token)=>{
setToken(token)
if(token){
localStorage.setItem('token',token)
}
else{
localStorage.removeItem('token')
}
}

export const ContextProvider=({children})=>{
return (
<UserContext.Provider values={{ user, token, setUser, TokenFunc }}>
    {children}
</UserContext.Provider>
)
}
