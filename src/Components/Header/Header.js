import React from 'react'
import {NavLink, Link} from 'react-router-dom';
import './Header.css';

export default function Header() {
    return (
        <section id='header'>
            <Link to='/'>
                <h1>AcroYoga Flow</h1>  
            </Link>
            <nav>
                <NavLink to='/flows'>Flows</NavLink>
                <NavLink to='/create/flow'>Create Flow</NavLink>   
            </nav>
        </section>
    )
}
