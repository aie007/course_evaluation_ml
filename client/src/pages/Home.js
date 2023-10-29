import React from 'react'
import logo from '../components/Images/Logo.jpg';

function Home() {
  return (
    <div>
      <div className='content'>
        <img id='homeLogo' src={ logo } alt='course fix is an enterprise solution'></img>
      </div>
      <div className='content'>
        <p>
          <h4 className="p-heading">About Us</h4>
          Were you ever so excited after learning something that you wanted to share it with everyone? Or have you ever felt bored and left out in the classroom? We believe your insights are invaluable in shaping the future of our courses and lectures.
        </p>
        <p>
          <h4 className="p-heading">How it works?</h4>
          Each response will play a crucial role in making our classes more engaging, inclusive, and tailored to your needs. Your feedback is confidential and will be used solely for enhancing course delivery. Your honest responses are greatly appreciated and your anonymity is guaranteed.
        </p>
        <p>
        <h4 className="p-heading">Make a difference...</h4>
        Please take a few minutes to share your thoughts with us by completing this course evaluation form. We encourage you to express your thoughts in natural language. Providing a detailed and meaningful feedback helps us make tangible improvements.
        </p>
        <p>
        Thank you for your participation. Your contributions will augment the overall learning experience at our college.
        </p>   
      </div>
  </div>
)}
export default Home