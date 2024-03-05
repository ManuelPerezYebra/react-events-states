import { USERS } from "../../constants/users"; 
import { useState } from "react";

const User =()=>{
    const [user, setUser] = useState(0)
    return (
    
        <>
        <img src={USERS[user].profileImage} alt="" />
        <h1>Name: {USERS[user].name}</h1>
        <p>Username: {USERS[user].username}</p>
        <p>Email: {USERS[user].email}</p>
        <button onClick={()=>previewsUser(user, setUser)} disabled={user===0}>Previous</button>
        <button onClick={()=>nextUser(user, setUser)} disabled={user===USERS.length-1}>Next</button>
        </>
    )
}
const nextUser=(user, setUser)=>{
    
    setUser(user+1)
}
const previewsUser =(user, setUser)=>{
    setUser(user-1)
}

export default User