import React from 'react'
import './style.scss'
import Logo from './../../assets/logo.png'
import { Link } from 'react-router-dom'
import Menu from './Menu';

export default function Header() {
    return (
        <div className="main-header-component">
            <div className="wrap">
                <div className="logo">
                    <Link to='/'>
                        <img src={Logo} alt="simple tut logo" />
                    </Link>
                </div>
                <Menu />
            </div>
        </div>
    )
}
