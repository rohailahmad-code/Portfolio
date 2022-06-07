import React from 'react';
import './FurtherDetail..css';
import BrowseCourse from '../../images/BrowseCourse.png';
import lms from '../../images/lms-home.png'

const FurtherDetail = (props) => {
  return (
    <div className='FurtherDetail'>
        <h2>{props.heading}</h2>
        <p>{props.para1}</p>
        <img src={props.img} alt="" />
        <p>{props.para2}</p>
        <a href="">Click here</a>
    </div>
  )
}

export default FurtherDetail;