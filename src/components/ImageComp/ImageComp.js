import React from 'react';
import './ImageComp.css';
import AboutImg from '../../images/banner-img.jpg'

const ImageComp = () => {
  return (
    <div className='ImageComp'>
        <img src={AboutImg} alt="" />
    </div>
  )
}

export default ImageComp;