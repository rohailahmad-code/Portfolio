import React from 'react';
import BackToHome from '../components/BackToHome/BackToHome';
import Banner from '../components/Banner/Banner';
import ContactDetail from '../components/ContactDetail/ContactDetail';

const ContactUs = () => {
  return (
    <main style={{ backgroundColor: '#000'}}>
      <div className='Contact' >
        <BackToHome/>
        <Banner heading1="Let's make" 
                heading2="something great!" />
        <ContactDetail/>
      </div>
    </main>
  ) 
}

export default ContactUs;