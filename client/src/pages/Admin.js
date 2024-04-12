import React, { useRef } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
// import emailjs from '@emailjs/browser';
// import EmailHeader from '../components/EmailHeader';

function Admin() {

  const dltCours = () =>{
    alert("Course Deleted Successfully!!");
  }
  const dltInstr = () =>{
    alert("Instructor Deleted Successfully!!");
  }
  const addcours = () =>{
    alert("Course Added Successfully!!");
  }
  const addInstr = () =>{
    alert("Instructor Added Successfully!!");
  }
  return (
    <div className='content'>
      <h1 className='page-heading centered'>Welcome back, Administrator!</h1>  
      {/* <EmailHeader/> */}
      <Tabs
        defaultActiveKey="add-course"
        id="admin-tabs"
        className="mb-3"
        variant='tabs'
        data-bs-theme="dark"
        fill
      >
        <Tab eventKey="add-course" title="Add Course">
          <div className='form-div'>
            <h3 className='p-heading centered'>Add New Courses</h3>
            <form id='addCourse'>
              <label htmlFor='ccode'>
                <span className="label-title">Code</span>
                <input type='text' placeholder='like CS503'/>
              </label>
              <label htmlFor='cname'>
                <span className="label-title">Name</span>
                <input type='text' placeholder='like Computer Networking'/>
              </label>
              <label htmlFor='cins'>
                <span className="label-title">Institution</span>
                <input type='text' placeholder='like Example Institute of Technology'/>
              </label>
              <div class="container">
                <button className='mybutton' onClick={addcours}> Add </button>
              </div>
            </form>
          </div>
        </Tab>

        <Tab eventKey="del-course" title="Delete Course">
        <div className='form-div'>
            <h3 className='p-heading centered'>Delete Course</h3>
            <form id='deleteCourse'>
              <label htmlFor='cname'>
                <span className="label-title">Course Name</span>
                <input type='text' placeholder='like Computer Networking'/>
              </label>
              <div class="container">
                <button className='mybutton' onClick={dltCours}> Delete </button>
              </div>
            </form>
          </div>
        </Tab>

        <Tab eventKey="add-instructor" title="Add Instructor">
          <div className='form-div'>
        <form id='addInstructor'>
        <h3 className='p-heading centered'>Add New Instructor</h3>
              <label htmlFor='cname'>
                <span className="label-title">Name</span>
                <input type='text' placeholder='like Albert Einstein'/>
              </label>
              <label htmlFor='cins'>
                <span className="label-title">Institution</span>
                <input type='text' placeholder='like Example Institute of Technology'/>
              </label>
              <label htmlFor='cqal'>
                <span className="label-title">Qualification</span>
                <input type='text' placeholder='like PhD, ME, MTech, MPhil, MS, MSc'/>
              </label>
              <div class="container">
                <button className='mybutton' onClick={addInstr}> Add </button>
              </div>
            </form>
            </div>
        </Tab>

        <Tab eventKey="del-instructor" title="Delete Instructor">
        <div className='form-div'>
            <h3 className='p-heading centered'>Delete Instructor</h3>
            <form id='deleteCourse'>
              <label htmlFor='cname'>
                <span className="label-title">Instructor</span>
                <input type='text' placeholder='Select a name'/>
              </label>
              <div class="container">
                <button className='mybutton' onClick={dltInstr}> Delete </button>
              </div>
            </form>
          </div>
        
        </Tab>
      </Tabs>
    </div>
  )
}
export default Admin