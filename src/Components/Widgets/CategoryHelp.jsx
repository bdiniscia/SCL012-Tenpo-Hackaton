import React from 'react'
import './CategoryHelp.css'

const CategoryHelp = ({icon, title, onClick}) => {
    return (
        <div className='categoryHelp' onClick={onClick}>
            <div className='contentCategory' >
                <img alt={title} src={icon} className='iconCategory'/>
                <span className='categoryText'>{title}</span>
            </div>
            <img alt='Read more' src={require('../../img/next.svg')} />
        </div>
    )
}

export default CategoryHelp
