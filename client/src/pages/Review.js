import React, { useState, useEffect } from 'react'

function Review() {
  const [data, setData] = useState([{}])

  useEffect(() => {
    fetch('./review').then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  }, [])

  function checkOTP() {
    var otp = document.getElementById('otp');
    if(otp && otp.value === '112115') {
      alert('correct otp');
    }
    else
      alert('wrong otp');
  }

  return (
    <div className='content'> 
      <h1>Write a Review</h1>
      <p>We value your words. Word your opinions about those courses you took this semester to make a change. All reviews are kept anonymous (and once submitted, cannot be deleted as of now). Your email address will be recorded for verification purposes only.</p>
      <form>
        <label htmlFor='institute'>Institution</label>
        <select id='institute' name='institute' required>
          <option selected="true" disabled='true'>Select your college</option>
          {(typeof data.institutions === "undefined") ? (
            <option disabled='true'>Loading...</option>
          ) : (
            data.institutions.map((institution, i) => (
            <option key={institution.name}>{institution.name}</option>
            ))
          )}
        </select><br/>
        <label htmlFor='email'>Email ID (issued by your institute)</label>
        <input id='email' name='email' type='email' required placeholder='johndoe@institute.edu'/><br/>
        <label htmlFor='otp'>OTP (sent on your email)</label>
        <input id='otp' name='otp' type='password' placeholder='6-digit PIN'/><br/>
        <button onClick={checkOTP()}>Verify OTP</button>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
export default Review