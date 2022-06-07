import React from 'react'
import './BackButton.css';

import { useNavigate } from 'react-router-dom';


const BackButton = () => {
    
    const navigate = useNavigate();

    return (
        <main className='BackButton'>
            <div className='BackBtn'>
                <button className='btn' onClick={() => {navigate(-1)}}>rohail.</button>
            </div>
        </main>
        
    )
}

export default BackButton;