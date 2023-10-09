import React, { useState, useEffect } from 'react'
import axios from 'axios';

function Courses() {
  const [courses, setCourses] = useState([{}])
  const [college, setCollege] = useState("")
  const [course, setCourse] = useState("")
  const [haveDetails, setHaveDetails] = useState(false)
  const [details, setDetails] = useState([{}])

  // async function getCourse() {
  //   console.log(course)
  //   console.log(college)
  //   await fetch('./courses?course='+course+'&institute='+college).then(
  //     res => res.json()
  //   ).then(
  //     data => {
  //       setHaveDetails(true)
  //       setDetails(data)
  //       console.log(data)
  //     }
  //   )
  // }

  useEffect(() => {
    fetch('./courses').then(
      res => res.json()
    ).then(
      data => {
        setCourses(data)
        setCollege(data.institutes[0].name)
        setCourse(data.institutes[0].courses[0])
        console.log(data)
      }
    )
  }, [])


  return (
    <div className='content'>
      <h1>Courses</h1>
      <select id="institute" name='institute' onChange={(e) => setCollege(e.target.value)} value={ college }>
        <option disabled='true' selected="true">Select college</option>
        {(typeof courses.institutes === "undefined") ? (
          <option disabled='true'>Loading...</option>
        ) : (
          courses.institutes.map((institute, i) => (
            <option key={ i } value={ institute.name }>{ institute.name }</option>
          )) 
        )}
      </select>
      <select id='course' name='course' onChange={(e) => setCourse(e.target.value)} value={ course }>
        <option disabled='true' selected="true">Select course</option>
        {(typeof courses.institutes === "undefined") ? (
            <option disabled='true'>Loading...</option>
          ) : (
            courses.institutes.filter(institute => institute.name === college)[0].courses.map((course, i) => (
              <option key={ i } value={ course }>{ course }</option>
            )) 
          )}
      </select>
      {/* <button onClick={getCourse()}>View</button> */}
      {/* <p>your course is {details}</p> */}
    </div>
  )
}
export default Courses