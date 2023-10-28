import React from 'react'
import logo from '../components/Images/Logo.jpg';

function Home() {
  return (
    <div>
      <div className='content'>
        <img id='homeLogo' src={ logo } alt='course fix is an enterprise solution'></img>
      </div>
      <div className='content'>
        <h3>Dear students,

Were you ever so excited after learning something that you wanted to share it with everyone? Or have you ever felt bored and left out in the classroom? We believe your insights are invaluable in shaping the future of our courses and lectures.
<br/>

Each response will play a crucial role in making our classes more engaging, inclusive, and tailored to your needs. Your feedback is confidential and will be used solely for enhancing course delivery. Your honest responses are greatly appreciated and your anonymity is guaranteed.
<br/>
Please take a few minutes to share your thoughts with us by completing this course evaluation form. We encourage you to express your thoughts in natural language. Providing a detailed and meaningful feedback helps us make tangible improvements.

Thank you for your participation. Your contributions will augment the overall learning experience at our college.</h3> <br/>
       
      </div>
  </div>
)}
export default Home