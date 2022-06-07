import React from 'react';
import './Project.css';

const Project = (props) => {
  return (
    <div className='Project'>
        <h1>{props.heading}</h1>
        <span>{props.span}</span>
        <img src={props.img} alt="" />
        <div className="ProjectDetail">
            <h2>{props.subheading}</h2>
            <span>{props.subdetail}</span>
            <p>{props.para}</p>
            <a href={props.link} target='_blank' >Click here to view</a>
        </div>
    </div>
  )
}

export default Project;