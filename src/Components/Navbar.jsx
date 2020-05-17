import React from 'react';
import './Navbar.css';
import SvgMoney from './Widgets/SvgMoney';
import SvgCard from './Widgets/SvgCard';
import SvgHelp from './Widgets/SvgHelp';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className='navbar'>
            <Link to="/" style={{ textDecoration: "none", color: "#333"}}>
                <div className='divIcon'>
                    <SvgMoney className='iconNavbar' />
                    <p className='textIcon'>Tu plata</p>
                 </div>
            </Link>
            <div className='divIcon'>
                <SvgCard className='iconNavbar' />
                <p className='textIcon'>Tarjeta</p>
            </div>
            <Link to="/Help" style={{ textDecoration: "none", color: "#333"}}>
                <div className='divIcon'>
                    <SvgHelp className='iconNavbar' />
                    <p className='textIcon'>Ayuda</p>
                </div>
            </Link>
        </div>
    )
}

export default Navbar
