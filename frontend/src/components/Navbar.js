import React, {useState} from 'react';
import {Link} from 'react-router-dom'; 

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false)
  return (
    <>
        <nav className="navbar">
            <div className="navbar-container">
                <link to="/" className="navbar-logo">
                    PlantX <i class="fa-solid fa-leaf"></i>
                </link>
                <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} /> 
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                    <link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Home
                    </link>
                    </li>
                    <li className='nav-item'>
                    <link to='/about' className='nav-links' onClick={closeMobileMenu}>
                        About
                    </link>
                    </li>
                    <li className='nav-item'>
                    <link to='/sign-up' className='nav-links' onClick={closeMobileMenu}>
                        Sign up
                    </link>
                    </li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default Navbar