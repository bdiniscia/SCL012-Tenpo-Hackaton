import React from 'react'
import './Support.css'
import HeaderRequirement from './Widgets/HeaderRequirement'
import InputRequirement from './Widgets/InputRequirement'

const SupportSimple = () => {
    return (
        <div className='support'>
            <HeaderRequirement />
            <div className='contentSupport'>
                <InputRequirement />
            </div>
        </div>
    )
}

export default SupportSimple
