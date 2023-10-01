import React, { useState, useEffect } from 'react'

function SignIn() {
  const [data, setData] = useState([{}])

  useEffect(() => {
    fetch('./signin').then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  }, [])

  return (
    <div> 
      <h1>Sign In</h1><br/>
      <form action='/signin' method="POST">
        <select name='institute'>
          <option selected="true" disabled='true'>Select your college</option>
          {(typeof data.institutions === "undefined") ? (
            <option disabled='true'>Loading...</option>
          ) : (
            data.institutions.map((institution, i) => (
            <option key={institution.domain}>{institution.name}</option>
            ))
          )}
        </select><br/>
        <input name='email' type='email' placeholder='Enter your college email id'/><br/>
        <input name='password' type='password' placeholder='Enter your password'/><br/>
        <button type='submit'>Sign in</button>
      </form>
    </div>
  )
}
export default SignIn