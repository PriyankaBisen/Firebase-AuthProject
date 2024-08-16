import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import {auth} from './firebase';
import {signInWithEmailAndPassword } from 'firebase/auth';
import {toast} from 'react-toastify';
import {  useNavigate } from 'react-router-dom';

const Login = () => {
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    
    const navigate = useNavigate(); 
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!email || !password) {
            toast.error("Please fill in all the fields", {
                position: "top-center",
            });
            return;
        }
        try{
        await  signInWithEmailAndPassword(auth,email,password)
console.log("Login Successfully")
 navigate("/Dashboard");
toast.success("Login Successfully",{
   position:"top-center" ,
});
        }catch(err){
            console.log(err.message)
            toast.error("Invalid Credential",{
                position:"top-center" ,
             });
        }
    }
    return(
        <div className='signup-container'>
            <form className='signup-form' onSubmit={handleSubmit}>
                <h2>Login</h2>
                <label htmlFor='email'>
Email:
<input type='text' onChange={(e)=>setEmail(e.target.value)}/>
                </label>
                <label htmlFor='password'>
Password:
<input type='password' onChange={(e)=>setPassword(e.target.value)}/>
                </label>
                <button type='submit'>Login</button><br/><br/>
                <p>Don't have Account? <Link to="/signup">Register</Link></p>
            </form>
        </div>
    )
}

export default Login ;
