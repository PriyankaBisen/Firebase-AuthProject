

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import EditProfile from './EditProfile';
import Login from './Login'
import SignUpForm from './SignUpForm';

function App() {
  return (
    <Router>
      <div className="app">
       <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/profile" element={<EditProfile />} />
          <Route path="/logout" element={<Login/>} />
          <Route path='/signup' element={<SignUpForm/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/dashboard' element={<Dashboard/>}></Route> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
