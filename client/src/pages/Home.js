import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import front_img from '../components/Images/front_img.jpg';
import third_img from '../components/Images/third_img.jpg';
import fourth_img from '../components/Images/fourth_img.jpg';

function Home() {
  return (
    <div><center><Carousel>
    <Carousel.Item interval={1000}>
      <img src={ front_img } height="600px" width="100%" alt=""/>
      <Carousel.Caption>
        <h3>Course Evaluation made easy with machine learning</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={1000}>
      <img src={ fourth_img } height="600px" width="100%" alt=""/>
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img src={ third_img } height="600px" width="100%" alt=""/>
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel></center></div>
)}
export default Home