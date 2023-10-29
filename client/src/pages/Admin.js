import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function Admin() {
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
            </form>
          </div>
        </Tab>
        <Tab eventKey="upd-course" title="Update Course">
          Tab content for Profile
        </Tab>
        <Tab eventKey="del-course" title="Delete Course">
          Tab content for Profile
        </Tab>
        <Tab eventKey="add-instructor" title="Add Instructor">
          Tab content for Home
        </Tab>
        <Tab eventKey="upd-instructor" title="Update Instructor">
          Tab content for Profile
        </Tab>
        <Tab eventKey="del-instructor" title="Delete Instructor">
          Tab content for Profile
        </Tab>
      </Tabs>
    </div>
  )
}
export default Admin