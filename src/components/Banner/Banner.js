import React from 'react';
import './Banner.css';

const Banner = (props) => {
  return (
    <div className='Banner'>
        <h1>{props.heading1}<br/>{props.heading2}</h1>
    </div>
  )
}

export default Banner;