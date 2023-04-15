import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'


function Navbar() {
    return (
        <div className='container' >
            <div></div>
            <ul>
                <li>
                    <Link to={'./home'} className='link' >Home</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link to={'./About'} className='link' >About</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link to={'./Contacts'} className='link' >Contacts</Link>
                </li>
            </ul>

        </div>
    )
}

export default Navbar
