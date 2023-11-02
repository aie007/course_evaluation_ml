import React, { useState, useEffect } from 'react'

function Contact() {
  const sentmsg = () =>{
    alert("Message sent successfully!!");
  }

  const [data, setData] = useState([{}])
  const [email, setEmail] = useState("")
  // const [isReadOnly, setIsReadOnly] = useState(true)
  // const [college, setCollege] = useState("")

  useEffect(() => {
    fetch('./contact').then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  }, [])
  return (
    <div className='content'>
      <h1 className='page-heading centered'>Get in Touch with us</h1>< br/>
      <p class="content-center">Thank you for visiting our website!! Have any questions? We'd love to hear from you. Your input is essential in helping us improve our services and meet your needs.</p>
      <div className='form-div'>
        <form>
          <label htmlFor='Name'>
            <span className="label-title">Name</span>
            <input type='text' placeholder='Write your full name'/>

          </label>
          <label htmlFor='email'>
            <span className="label-title">Email ID </span>
            <input id='email' name='email' type='email' className='studentDetails' placeholder='johndoe@institute.edu' />
          </label>
          
          <label><span className="label-title">Message</span><textarea name="postContent" rows={4} cols={40}  placeholder='What can we help with?' />  </label>
          <div class="container">
            <button onClick={sentmsg} type="send">Send Message </button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default Contact