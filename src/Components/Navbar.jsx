import React from 'react'
import './Navbar.css'
import SvgMoney from './Widgets/SvgMoney'
import SvgCard from './Widgets/SvgCard'
import SvgHelp from './Widgets/SvgHelp'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='divIcon'>
                <SvgMoney className='iconNavbar' />
                <p className='textIcon'>Tu plata</p>
            </div>
            <div className='divIcon'>
                <SvgCard className='iconNavbar' />
                <p className='textIcon'>Tarjeta</p>
            </div>
            <div className='divIcon'>
                <SvgHelp className='iconNavbar' />
                <p className='textIcon'>Ayuda</p>
            </div>
        </div>
    )
}

export default Navbar
