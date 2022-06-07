import React from 'react'
import BackToHome from '../components/BackToHome/BackToHome';
import WorkTitle from '../components/WorkTitle/WorkTitle';
 

import './pages.css';

const Work = () => {
  return (
    <main style={{ backgroundColor: '#000'}}>
      <div className='Work'>
        <BackToHome/>
        <WorkTitle/>
      </div>
    </main>
  )
}

export default Work;