import React, { useState, useEffect } from 'react';
// import Dashboard from '../components/Dashboard';
// import axios from 'axios';
// import { Tableau } from '../components/Dashboard';

function Courses() {
  // const [courses, setCourses] = useState([{}])
  // const [college, setCollege] = useState("")
  // const [course, setCourse] = useState("")
  // const [haveDetails, setHaveDetails] = useState(false)
  // const [details, setDetails] = useState([{}])

  // links to dashboards for all colleges
  const dashboards = [
    {
        name: 'Acropolis Institute of Technology & Research',
        faculty: 'https://public.tableau.com/views/FacultyDashboard1/FacultyDashboard?:language=en-US&:display_count=n&:origin=viz_share_link', 
        courses: 'https://public.tableau.com/views/CourseDashBoard/Dashboard1?:language=en-US&:display_count=n&:origin=viz_share_link'
    }
  ]

  const [institute, setInstitute] = useState("")

  function showFD() {
      try {
      window.open(dashboards[institute]['faculty'], "faculty dashboard", "fullscreen=1,height=700,width=900");
      }
      catch {
        window.alert("No details found for the selected institute.");
      }
    
  }

  function showCD() {
    try {
      window.open(dashboards[institute]['courses'], "courses dashboard", "fullscreen=1,height=700,width=900");
      }
    catch {
      window.alert("No details found for the selected institute.");
    }
  }

  // useEffect(() => {
  //   fetch('./courses').then(
  //     res => res.json()
  //   ).then(
  //     data => {
  //       setCourses(data)
  //       setCollege(data.institutes[0].name)
  //       setCourse(data.institutes[0].courses[0])
  //       console.log(data)
  //     }
  //   )
  // }, [])


  return (
    <div className='content content-center'>
      <h1 className='page-heading centered'>Courses & Faculty Performance</h1>
      <p>
        Select your institution and view the courses and faculty performance dashboards here. The current data visualized here correspond to the dataset collected in the year 2023. Please contact us for further details via the contact page. Thank you for your interest.
      </p>
      {/* <select id="institute" name='institute' onChange={(e) => setCollege(e.target.value)} value={ college }>
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
      </select> */}
      <select onChange={(e) => setInstitute(e.target.value)} >
        <option disabled='true' selected="true" >Institutions</option>
        {
          dashboards.map((institute, i) => (
            <option key={ i } value={ i }>{ institute.name }</option>
          ))
        }
        
      </select>
      <div class="container">
      <button className='mybutton' type="button" onClick={ showFD }>View Faculty Performance</button>
      </div>
      <div class="container">
      <button className='mybutton' type="button" onClick={ showCD }>View Courses Dashboard</button>
      </div>
    </div>
  )
}
export default Courses