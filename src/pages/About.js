import React from 'react';
import AboutDetail from '../components/AboutDetail/AboutDetail';
import BackToHome from '../components/BackToHome/BackToHome';
import Banner from '../components/Banner/Banner';
import ImageComp from '../components/ImageComp/ImageComp';
import './pages.css';

const About = () => {
  return (
    <main style={{ backgroundColor: '#000'}}>
      <div className='About' >
        <BackToHome/>
        <Banner heading1="I create Front-end"
                heading2="of the Website"/>
        <ImageComp/>
        <AboutDetail/>
      </div>
    </main>
  )
}

export default About