import React from 'react'
import './Button.css'

const Button = ({title, onClick}) => {
    return (
        <button className='buttonApp' onClick={onClick}>
            {title}
        </button>
    )
}

export default Button
