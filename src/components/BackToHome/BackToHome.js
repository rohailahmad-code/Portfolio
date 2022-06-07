import React from 'react';
import './BackToHome.css';

import { useNavigate } from 'react-router-dom';


const BackToHome = () => {
    
    const navigate = useNavigate();

    return (
        <main className='BackToHome'>
            <div className='BackBtn'>
                <button className='btn' onClick={() => {navigate('/')}}>rohail.</button>
            </div>
        </main>
        
    )
}

export default BackToHome;