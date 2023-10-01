import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import front_img from '../components/Images/front_img.jpg';
import third_img from '../components/Images/third_img.jpg';
import blackboard from '../components/Images/blackboard.jpg';

function Home() {
  return (
    <center><Carousel>
    <Carousel.Item interval={1000}>
      <img src="https://cdn.pixabay.com/photo/2013/07/12/17/46/chalkboard-152414_640.png" height="800px" width="100%" alt=""/>
      <Carousel.Caption>
        <h3>Course Evaluation made easy with machine learning</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={1000}>
      <img src="https://cdn5.vectorstock.com/i/1000x1000/14/79/school-chalkboard-with-different-education-stuff-vector-21601479.jpg" height="600px" width="100%" alt=""/>
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img src={blackboard} height="600px" width="100%" alt=""/>
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel></center>
)}
export default Home