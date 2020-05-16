import React from 'react'
import './CategoryHelp.css'

const CategoryHelp = ({key, icon, title}) => {
    return (
        <div className='categoryHelp' key={key}>
            <div className='contentCategory' >
                <img alt={title} src={icon} className='iconCategory'/>
                <span className='categoryText'>{title}</span>
            </div>
            <img alt='Read more' src={require('../../img/next.svg')} />
        </div>
    )
}

export default CategoryHelp
