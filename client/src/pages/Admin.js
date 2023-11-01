import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import styled from 'styled-components';


const Button = styled.button`
background-color: white;
color: black;
font-size: 20px;
padding: 10px 60px;
border-radius: 5px;
margin: 20px 500px;
cursor: pointer;
`;

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
              <br />
              <Button onClick={addcours} > Add </Button>
            </form>
          </div>
        </Tab>

        <Tab eventKey="del-course" title="Delete Course">
        <div className='form-div'>
            <h3 className='p-heading centered'>Delete Course</h3>
            <br />
            <form id='deleteCourse'>
              <label htmlFor='cname'>
                <span className="label-title">Course Name</span>
                <input type='text' placeholder='like Computer Networking'/>
              </label>
              <br />
               <Button onClick={dltCours} > Delete </Button>
            </form>
          </div>
        </Tab>

        <Tab eventKey="add-instructor" title="Add Instructor">
          <br />
          <div className='form-div'>
        <form id='addInstructor'>
        <h3 className='p-heading centered'>Add New Instructor</h3>
              <label htmlFor='cname'>
                <span className="label-title">Name of Instructor</span>
                <input type='text' placeholder='like Narendra Pal sir'/>
              </label>
              <label htmlFor='cins'>
                <span className="label-title">Institution</span>
                <input type='text' placeholder='like Example Institute of Technology'/>
              </label>
              <label htmlFor='cqal'>
                <span className="label-title">Qualification</span>
                <input type='text' placeholder='like B-Tech/M-Tech'/>
              </label>
              <br />
              <Button onClick={addInstr} > Add </Button>
            </form>
            </div>
        </Tab>

        <Tab eventKey="del-instructor" title="Delete Instructor">
        <div className='form-div'>
            <h3 className='p-heading centered'>Delete Instructor</h3>
            <br />
            <form id='deleteCourse'>
              <label htmlFor='cname'>
                <span className="label-title">Instructor's Name</span>
                <input type='text' placeholder='like Computer Networking'/>
              </label>
              <br />
               <Button onClick={dltInstr} > Delete </Button>
            </form>
          </div>
        
        </Tab>
      </Tabs>
    </div>
  )
}
export default Admin