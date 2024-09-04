import React, { useState } from 'react'
import { TextField , Typography } from '@mui/material';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import App from "./App"


export default function Signup() {
    let [email , setemail] = useState("")
    let [password , setpassword] = useState("")

let signupHandler = (e) => {
    e.preventDefault()


    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
       
        const user = userCredential.user;
        console.log("pass" , user);
        
     
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("fail" , errorCode);
        
        // ..
      });

    e.target.reset()
}
  return (
    <div>
      <Typography variant='h3'>
        SignUp
        </Typography><br />
        <form action="" onSubmit={signupHandler}>

        

        <TextField id="outlined-basic" label="Email" variant="outlined"  onChange={(e) => {setemail(e.target.value)}} /><br /><br/>

      

        <TextField id="outlined-basic" label="Password" variant="outlined"  onChange={(e) => {setpassword(e.target.value)}} /><br /><br/>

        <button  style={{width:120 , height:50 , borderRadius:10 , backgroundColor:"#2e86c1" , color:"whitesmoke" , fontFamily:'sans-serif' , fontSize:19 , borderColor:"#2e86c1"}} >SignUp</button>


       
        </form>

    </div>
  )
}
