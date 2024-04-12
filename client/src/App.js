import React from 'react';
// import { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Review from './pages/Review'
import Admin from './pages/Admin';
import Courses from './pages/Courses'
import { BrowserRouter } from "react-router-dom"; 
import Navbar2 from './components/Header/Navbar2';

function App() {

  // const [data, setData] = useState([{}])

  // useEffect(() => {
  //   fetch('./members').then(
  //     res => res.json()
  //   ).then(
  //     data => {
  //       setData(data)
  //       console.log(data)
  //     }
  //   )
  // }, [])

  return (
      <BrowserRouter>
      <Navbar2 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/review" element={<Review />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      {/* <div className='content'>
          {(typeof data.members === "undefined") ? (
                  <p>Loading....</p>
          ) : (
            data.members.map((member, i) => (
                <p key={i}>{member}</p>
            ))
          )}
      </div> */}
      </BrowserRouter>
  );
}

export default App;
