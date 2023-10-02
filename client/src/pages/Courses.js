import React, { useState, useEffect } from 'react'
function Courses() {
  const [courses, setCourses] = useState([{}])

  useEffect(() => {
    fetch('./courses').then(
      res => res.json()
    ).then(
      data => {
        setCourses(data)
        console.log(data)
      }
    )
  }, [])

  // const [college, setCollege] = useState("No option selected")


  return (
    <div className='content'>
      <br/>
      <h1>Courses</h1>
      {/* <select onChange={(e) => setCollege(e.target.value)} defaultValue="Select an institute"> */}
        <select>
        {(typeof courses.courses === "undefined") ? (
            <option disabled='true'>Loading...</option>
          ) : (
            courses.courses.map((institute, i) => (
            <option key={i}>{institute.name}</option>
            ))
          )}
      </select>
    </div>
  )
}
export default Courses