import React, {Fragment} from 'react'
import './Support.css'
import HeaderSections from './Widgets/HeaderSections'
import InputRequirement from './Widgets/InputRequirement'
import Topbar from './Topbar'

const SupportSimple = () => {
    return (
        <Fragment>
            <Topbar />
            <div className='support'>
                <HeaderSections  title='Solicitud'/>
                <div className='contentSupport'>
                    <InputRequirement />
                </div>
            </div>
        </Fragment>
    )
}

export default SupportSimple
