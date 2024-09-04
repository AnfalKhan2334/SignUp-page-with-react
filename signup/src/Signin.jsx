import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function Signin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signInHandler = (e) => {
      e.preventDefault();
  
      // Log email and password
      console.log("Email:", email);
      console.log("Password:", password);

      
  
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
              const user = userCredential.user;
              console.log("pass", user);
          })
          .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log("fail", errorCode);
              console.error("Detailed error message:", errorMessage);
          });

          
  
      e.target.reset();
  };
  

    return (
        <div>
            <h1>SignIn</h1>
            <form onSubmit={signInHandler}>
                <input 
                    type="email" 
                    placeholder='Enter Email' 
                    onChange={(e) => setEmail(e.target.value)} 
                /><br /><br />
                <input 
                    type="password" 
                    placeholder='Enter Password' 
                    onChange={(e) => setPassword(e.target.value)} 
                /><br /><br />
                <button type="submit">SignIn</button>
            </form>
        </div>
    );
}
