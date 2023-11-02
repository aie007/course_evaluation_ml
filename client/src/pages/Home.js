import React from 'react'
import logo from '../components/Images/Logo.jpg';
import flowdiag from '../components/Images/flow-diag.jpg';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <div className='content'>
        <img id='homeLogo' src={ logo } alt='course fix is an enterprise solution'></img>
      </div>
      <div className='content'>
        <p>
          <h4 className="p-heading">About Us</h4>
          At Coursefix, we are not just a part of the educational landscape; we are the architects of its evolution.
          With a rich history of academic excellence and a forward-thinking vision for the future, we are committed
          to pushing the boundaries of higher education. Our story is one of innovation, inclusivity, and a relentless 
          pursuit of excellence.
          <br /><br />
          In today's dynamic landscape of higher education, our shared commitment is to enhance the quality of university classes and lectures. 
          To achieve this paramount objective,we recognize the need for a fresh approach to feedback evaluation We believe your insights are invaluable in
          shaping the future of our courses and lectures.
        </p>
        <p>
          <h4 className="p-heading">How it works?</h4> 
          Were you ever so excited after learning something that you wanted to share it with everyone? Or have you 
          ever felt bored and left out in the classroom? 
          Each response will play a crucial role in making our classes more engaging, inclusive, and tailored to your needs. 
          Your feedback is confidential and will be used solely for enhancing course delivery. Your honest responses are greatly
          appreciated and your anonymity is guaranteed.<br /><br />
          <img class="center" src={ flowdiag }></img>
        </p>
        <p>
        <h4 className="p-heading">Make a difference...</h4>
        As we embrace the opportunities of the digital age, we've witnessed a significant shift from hard-copy evaluations
        to online feedback forms. While this transition is a step in the right direction, it is clear that more comprehensive
        solutions are needed to meet the diverse needs of all stakeholders within the education ecosystem.
        <br /><br />
        At Coursefix, we are at the forefront of reimagining the feedback process. 
        We believe in fostering open and meaningful communication between students and instructors. Our approach 
        transcends the confines of traditional evaluation methods, embracing a more holistic, nuanced, and expressive 
        feedback system.
        Please take a few minutes to share your thoughts with us by completing the review form <Link to='/review' id='web-link'>here</Link>. We encourage 
        you to express your thoughts in natural language. Providing a detailed and meaningful feedback helps us make 
        tangible improvements.
        </p>
        <p>
        As we look toward the future, we invite you to join us on this journey of redefining feedback in higher 
        education. Together, we can create an ecosystem where quality education thrives, and the quest for 
        improvement is at the heart of every interaction.

        Discover the future of feedback at Coursefix. Together, we're shaping 
        the educational experience of tomorrow.<br /><br />
        Thank you for your participation. Your contributions will augment the overall learning experience at our college.
        </p>   
      </div>
  </div>
)}
export default Home