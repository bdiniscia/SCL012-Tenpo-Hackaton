import React from 'react'
import './HeaderSections.css'

const HeaderSections = ({title}) => {
    return (
        <header className='headerSupport'>
            <h1 className='titleRequierment'>{title}</h1>
        </header>
    )
}

export default HeaderSections
