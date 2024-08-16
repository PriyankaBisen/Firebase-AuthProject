
import React, { useState } from 'react';
import './EditProfile.css';
import {  useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const EditProfile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate = useNavigate(); 
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle profile update logic here
    console.log('Profile updated:', { name, email, password });
    toast.success("Profile updated Successfully", {
      position: "top-center",
  });
    navigate("/Dashboard");
  };

  return (
    <>
     <Navbar />
    <div className="edit-profile">
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Save Changes</button>
      </form>
    </div>
<>
  );
};

export default EditProfile;



