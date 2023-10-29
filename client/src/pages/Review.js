import React, { useState, useEffect } from 'react'

function Review() {
  const [data, setData] = useState([{}])
  const [email, setEmail] = useState("")
  const [isReadOnly, setIsReadOnly] = useState(true)
  const [college, setCollege] = useState("")

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
      const studentDetails = document.getElementsByClassName('studentDetails');
      for(let i = 0; i < studentDetails.length; i++)
        studentDetails[i].setAttribute('readOnly', 'readOnly');
      const instituteOptions = document.getElementById('institute').getElementsByTagName('option');
      for(let i = 0; i < instituteOptions.length; i++) {
        if(instituteOptions[i].value === college)
          continue;
        else {
          instituteOptions[i].setAttribute('disabled', 'true');
        }
      }
      setIsReadOnly(prevState => !prevState);
      const verifyBtn = document.getElementById('verifyBtn');
      verifyBtn.setAttribute('disabled', 'true');
      verifyBtn.style.color = 'white';
      console.log(data)
    }
    else
      alert('wrong otp');
  }

  return (
    <div className='content'> 
      <h1 className='page-heading centered'>Write a Review</h1>
      <p>We value your words. Word your opinions about those courses you took this semester to make a change. All reviews are kept anonymous (and once submitted, cannot be deleted as of now). Your email address will be recorded for verification purposes only.</p>
      <div className='form-div'>
        <form>
          <label htmlFor='institute'>
            <span className="label-title">Institution</span>
            <select id='institute' name='institute' className='studentDetails' onChange={(e) => setCollege(e.target.value)}>
              <option selected="true" disabled='true'>Select your college</option>
              {(typeof data.institutions === "undefined") ? (
                <option disabled='true'>Loading...</option>
              ) : (
                data.institutions.map((institution, i) => (
                <option key={institution.name} value={institution.name}>{institution.name}</option>
                ))
              )}
            </select>
          </label>
          <label htmlFor='email'>
            <span className="label-title">Email ID </span>
            <input id='email' name='email' type='email' className='studentDetails' placeholder='johndoe@institute.edu' onChange={(e) => setEmail(e.target.value)}/>
            {/* <span className='add-info'>(issued by your institute)</span> */}
          </label>
          <label htmlFor='otp'>
            <span className="label-title">OTP</span>
            <input id='otp' name='otp' type='password' className='studentDetails' placeholder='6-digit PIN'/>
          </label>
          <span><button type='button' id='verifyBtn' onClick={() => checkOTP()}>Verify OTP</button></span>
          <label><span className="label-title">Review</span><input id='namea' name='name' type='text' className='reviewDetails' defaultValue='nothing' readOnly={isReadOnly} /> </label>
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}
export default Review