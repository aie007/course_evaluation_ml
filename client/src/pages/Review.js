import React, { useState, useEffect, useRef } from 'react'
// import emailjs from '@emailjs/browser';

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
  // const [otp, setOtp] = useState('notyet')

  // const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm('SERVICE ID', 'TEMPLATE ID', form.current, 'PUBLIC ID')
  //     .then((result) => {
  //         console.log(result.text);
  //         alert("Email sent. Please check your mail for the passcode and verify it below.");
  //     }, (error) => {
  //         console.log(error.text);
  //         alert("Whoops a daisy! An error has occurred! Please try again later.")
  //     });
  // };

  // function getOTP() {
  //   // check email if belongs to college
  //   // const email = document.getElementById('to_email');
  //   if(!email.endsWith('@acropolis.in')) {
  //     alert('Please enter your college email address without any whitespaces.');
  //     return;
  //   }
  //   else {
  //     alert("okayyy");
  //     return;
  //   }

  //   // making and setting otp
  //   let result = '';
  //   const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  //   const charactersLength = characters.length;
  //   let counter = 0;
  //   while (counter < 7) {
  //     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  //     counter += 1;
  //   }
  //   setOtp(result);

  //   // sending the mail
  //   sendEmail();
  // }

  // function checkOTP() {
  //   var otpTyped = document.getElementById('otp');
  //   if(otpTyped && otpTyped.value === otp) {
  //     alert('Passcode verification successful!');
  //     const studentDetails = document.getElementsByClassName('studentDetails');
  //     for(let i = 0; i < studentDetails.length; i++)
  //       studentDetails[i].setAttribute('readOnly', 'readOnly');
  //     const instituteOptions = document.getElementById('institute').getElementsByTagName('option');
  //     for(let i = 0; i < instituteOptions.length; i++) {
  //       if(instituteOptions[i].value === college)
  //         continue;
  //       else {
  //         instituteOptions[i].setAttribute('disabled', 'true');
  //       }
  //     }
  //     setIsReadOnly(prevState => !prevState);
      
  //     const verifyBtn = document.getElementById('verifyBtn');
  //     verifyBtn.setAttribute('disabled', 'true');
  //     verifyBtn.style.color = 'white';

  //     const getOtpBtn = document.getElementById('getOtpBtn');
  //     getOtpBtn.setAttribute('disabled', 'true');
  //     getOtpBtn.style.color = 'white';

  //     console.log(data)

  //   }
  //   else
  //     alert('The passcode entered is incorrect.');
  // }

  const [courseIndex, setCourseIndex] = useState();
  const [faculty, setFaculty] = useState('');

  const coursesAvbl = [
    {
      'code': 'CS601',
      'title': 'Machine Learning',
      'staff': ['Mr. Gates', 'Mr. Khanna', 'Mrs. Anderson']
    },
    {
      'code': 'CS602',
      'title': 'Computer Networks',
      'staff': ['Mr. Sid', 'Ms. Corey', 'Mrs. Kaufmann']
    },
    {
      'code': 'CS603',
      'title': 'Computer Graphics',
      'staff': ['Mrs. Sharma']
    }
  ];

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
            <input id='to_email' name='to_email' type='email' className='studentDetails' placeholder='like johndoe@institute.edu' onChange={(e) => setEmail(e.target.value)}/>
            <span className='add-info'>(issued by your institute)</span>
          </label>
          {/* <span><button type='button' id='getOTP' onClick={ getOTP() }> Send Passcode</button></span>
           <label htmlFor='otp'>
            <span className="label-title">OTP</span>
            <input id='otp' name='otp' type='password' className='studentDetails' placeholder='Enter the passcode'/>
          </label> 
          <span><button type='button' id='verifyBtn' onClick={() => checkOTP()}>Verify Passcode</button></span> */}
          <label htmlFor='ccode'>
            <span className="label-title">Select Course </span>
            <select id='ccode' name='ccode' onChange={(e) => setCourseIndex(e.target.value)} >
              <option disabled='true' selected="true" >Courses offered</option>
              {
                coursesAvbl.map((course, i) => (
                  <option key={ course.code } value={ course.code }>{course.code} - { course.title }</option>
                ))
              }
            </select> 
          </label>
          <label><span className="label-title">Review Course</span><textarea name="postContent" rows={4} cols={40}  placeholder='Please provide your review on the course!' />  </label>
          <label htmlFor='faculty'>
            <span className="label-title"> Faculty's Name </span>
            <select id='fclty' name='fclty' onChange={(e) => setFaculty(e.target.value)} >
              <option disabled='true' selected="true" >Teaching Faculty</option>
              {
                coursesAvbl.filter(course => course.code === courseIndex).map((curr, i) => (
                  curr.staff.map((teacher, j) => (
                    <option key={ teacher } value={ teacher }>{ teacher }</option>
                  ))
                ))
              }
            </select>
          </label>
          <label><span className="label-title">Review Faculty</span><textarea name="postReview" rows={4} cols={40}  placeholder='Please share your experience with the faculty!' />  </label>
          <div class="container">
          <button className='mybutton' type='submit'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default Review