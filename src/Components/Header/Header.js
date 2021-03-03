import React from 'react'
import {NavLink, Link} from 'react-router-dom';

// Styled Components
import HeaderContainer from './HeaderContainer';
import NavContainer from './NavContainer';


export default function Header() {
    return (
       <HeaderContainer>
           <Link to='/'>
                <h1>AcroYoga Flow</h1>  
            </Link>
            <NavContainer>
                <NavLink to='/view/flows'>Flows</NavLink>
                <NavLink to='/create/flow'>Create Flow</NavLink>   
            </NavContainer>
       </HeaderContainer>
            
    )
}
