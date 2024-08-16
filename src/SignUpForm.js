import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import {auth} from './firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {toast} from 'react-toastify';
import {  useNavigate } from 'react-router-dom';

const SignUpForm = () => {
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[fname,setFname]=useState('');
    const[lname,setLname]=useState('');
    
    const navigate = useNavigate(); 

    const handleSubmit = async (e) => {
        e.preventDefault()
        // Check if all fields are filled
        if (!fname || !lname || !email || !password) {
            toast.error("Please fill in all the fields", {
                position: "top-center",
            });
            return;
        }
        try{
 await createUserWithEmailAndPassword(auth,email,password)
 console.log("Account Created")
 navigate("/Login");
 toast.success("Registration Successfully",{
    position:"top-center" ,
 });
        }catch(err){
            console.log(err.message)
            toast.error(err.message,{
                position:"top-center" ,
             });  
        }
    }
    return(
        <div className='signup-container'>
            <form className='signup-form' onSubmit={handleSubmit}>
                <h2>Sign Up</h2>
                <label htmlFor='fname'>
First Name
<input type='text' onChange={(e)=>setFname(e.target.value)}/>
                </label>
                <label htmlFor='lname'>
Last Name
<input type='text' onChange={(e)=>setLname(e.target.value)}/>
                </label>
                <label htmlFor='email'>
Email
<input type='text' onChange={(e)=>setEmail(e.target.value)}/>
                </label>
                <label htmlFor='password'>
Password
<input type='password' onChange={(e)=>setPassword(e.target.value)}/>
                </label>
                <button type='submit'>Register</button><br/>
                <p>Already Registered? <Link to="/login">Login</Link></p>
            </form>
        </div>
    )
}

export default SignUpForm ;




