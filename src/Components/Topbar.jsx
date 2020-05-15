import React from 'react'
import './Topbar.css'
import Logo from './Widgets/Logo'
import SquareMenu from './Widgets/SquareMenu'

const Topbar = () => {
    return (
        <div className='topbar'>
            <Logo className='logo' />
            <SquareMenu className='squareMenu' />          
        </div>
    )
}

export default Topbar
