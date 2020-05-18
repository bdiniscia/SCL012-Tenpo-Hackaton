import React from 'react';
import './BackButton.css'

const BackButton = ({onClick}) => {
    return (
        <div className='divBackButton'>
            <img onClick={onClick} alt='back button' src={require('../../img/back.svg')} className='backButton'/>
        </div>
    )
}

export default BackButton
