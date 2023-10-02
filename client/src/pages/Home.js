import React from 'react'
import logo from '../components/Images/Logo.jpg';

function Home() {
  return (
    <div>
      <div className='content'>
        <img id='homeLogo' src={ logo } alt='course fix is an enterprise solution'></img>
      </div>
      <div className='content'>
        <h3>Coursefix... eh?</h3> <br/>
        <h3>who are we? </h3><br/>
        <h3>help us make a change.</h3>
      </div>
  </div>
)}
export default Home