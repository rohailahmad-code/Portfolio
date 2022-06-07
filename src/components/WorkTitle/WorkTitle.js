import React from 'react';
import './WorkTitle.css';
import { NavLink } from 'react-router-dom';

const WorkTitle = () => {
  return (
    <div className='WorkTitle'>
         
            <NavLink to="/frontend">
              <div className="NavLink">
                <h1>Front-end</h1>
                <span>HTML - CSS - JavaScript</span>
              </div>
            </NavLink>

            <NavLink to="/reactapp">
              <div className="NavLink">
                <h1>React APP</h1>
                <span>npx create-react-app hello_world</span>
              </div>
            </NavLink>

    </div>
  )
}

export default WorkTitle;