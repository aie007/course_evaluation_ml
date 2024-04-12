import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5autfdk', 'template_2rkexe7', form.current, 'janrr6kuBPsLT-9xF')
      .then((result) => {
          console.log(result.text);
          alert("Your message has been sent successfully. We'll reach back to you soon.");
      }, (error) => {
          console.log(error.text);
          alert("Whoops a daisy! An error has occurred! Please try again later.")
      });
  };
  
  return (
    <div className='content'>
      <h1 className='page-heading centered'>Get in Touch with us</h1>
      <p class="content-center">Thank you for visiting our website!! Have any questions? We'd love to hear from you. Your input is essential in helping us improve our services and meet your needs.</p>
      <div className='form-div'>
        <form ref={form} onSubmit={sendEmail}>
          <label htmlFor='cname'>
            <span className="label-title">Name</span>
            <input type='text' name='cname' placeholder='Write your full name' required/>
          </label>

          <label htmlFor='cmail'>
            <span className="label-title">Email ID </span>
            <input id='email' name='cmail' type='email' className='studentDetails' placeholder='johndoe@institute.edu' required/>
          </label>

          <label htmlFor='subject'>
            <span className="label-title">Subject </span>
            <select name='subject' id='subject' required>
              <option disabled selected >Choose an appropriate subject</option>
              <option id="" name="" value="">Get CourseFix at your college</option>
              <option>Join at CourseFix</option>
              <option>Suggestions for improvement</option>
              <option>Partner with us</option>
              <option>Add a new administrator (for existing members)</option>
              <option>Others (Please specify along with the message)</option>
            </select>
          </label>
          
          <label><span className="label-title">Message</span><textarea name="message" rows={4} cols={40}  placeholder='What can we help with?' required/>  </label>
          <div class="container">
            <button className='mybutton' type="submit">Send Message </button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default Contact