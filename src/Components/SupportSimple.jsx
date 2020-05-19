import React, {Fragment} from 'react'
import './Support.css'
import HeaderRequirement from './Widgets/HeaderRequirement'
import InputRequirement from './Widgets/InputRequirement'
import Topbar from './Topbar'

const SupportSimple = () => {
    return (
        <Fragment>
            <Topbar />
            <div className='support'>
                <HeaderRequirement />
                <div className='contentSupport'>
                    <InputRequirement />
                </div>
            </div>
        </Fragment>
    )
}

export default SupportSimple
