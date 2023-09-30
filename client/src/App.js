import React, { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import SignIn from './pages/Signin'
import Courses from './pages/Courses'
import { BrowserRouter } from "react-router-dom"; 
import Navbar2 from './components/Header/Navbar2';

function App() {

  const [data, setData] = useState([{}])

  useEffect(() => {
    fetch('./members').then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  }, [])

  return (
      <BrowserRouter>
      <Navbar2 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
    
      <div>
          {(typeof data.members === "undefined") ? (
                  <p>Loading....</p>
          ) : (
            data.members.map((member, i) => (
                <p key={i}>{member}</p>
            ))
          )}
      </div>
      </BrowserRouter>
  );
}

export default App;
