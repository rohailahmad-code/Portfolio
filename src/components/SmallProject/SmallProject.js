import React from 'react';
import './SmallProject.css';
import Calculator from '../../images/calculator.png'

const SmallProject = (props) => {
  return (
    <div className='SmallProject'>
        <h1>{props.heading}</h1>
        <span>{props.span}</span>
        <div className="SmallProjectDetail">
            <img src={props.img} alt="" />
            <a href={props.link} target="_blank">Click here to view</a>
        </div>
    </div>
  )
}

export default SmallProject; 