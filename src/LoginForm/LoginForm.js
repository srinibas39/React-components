import { useState } from "react";
import "./LoginForm.css"

const Form=({setModalOpen})=>{
   return <form>
       <label>
            Username
           <input type="text"></input>
       </label>
       <label>
            Password
           <input type="text"></input>
       </label>
       <button>Login</button>
       <button onClick={()=>setModalOpen(false)}>close</button>
    </form>
}

export const LoginForm=()=>{
    const[modalOpen,setModalOpen]=useState(false)
   return<>
   <div className={modalOpen?"hide":"not-hide"}>
       <h2>Login Form</h2>
       <button onClick={()=>setModalOpen(!modalOpen)}>Login</button>
   </div>
       {modalOpen && <Form setModalOpen={setModalOpen}/>}
   </> 
}