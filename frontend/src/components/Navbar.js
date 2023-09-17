import * as React from 'react';
//import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
    const navRef = useRef();

    const showNav = () => {
        navRef.current.classList.toggle('responsive_nav');
    };

    return (
        <header>
            <div>
                <div>
                    <svg
                        id="logo-15"
                        width="49"
                        height="48"
                        viewBox="0 0 49 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {' '}
                        <path
                            d="M24.5 12.75C24.5 18.9632 19.4632 24 13.25 24H2V12.75C2 6.53679 7.03679 1.5 13.25 1.5C19.4632 1.5 24.5 6.53679 24.5 12.75Z"
                            fill="#17CF97"
                        ></path>{' '}
                        <path
                            d="M24.5 35.25C24.5 29.0368 29.5368 24 35.75 24H47V35.25C47 41.4632 41.9632 46.5 35.75 46.5C29.5368 46.5 24.5 41.4632 24.5 35.25Z"
                            fill="#17CF97"
                        ></path>{' '}
                        <path
                            d="M2 35.25C2 41.4632 7.03679 46.5 13.25 46.5H24.5V35.25C24.5 29.0368 19.4632 24 13.25 24C7.03679 24 2 29.0368 2 35.25Z"
                            fill="#17CF97"
                        ></path>{' '}
                        <path
                            d="M47 12.75C47 6.53679 41.9632 1.5 35.75 1.5H24.5V12.75C24.5 18.9632 29.5368 24 35.75 24C41.9632 24 47 18.9632 47 12.75Z"
                            fill="#17CF97"
                        ></path>{' '}
                    </svg>
                </div>
                <h3>PlantX</h3>
            </div>
            <nav ref={navRef}>
                <Link onClick={showNav} to="/">
                    <span>Home</span>
                </Link>
                <Link to="/market" onClick={showNav}>
                    <span>Market</span>
                </Link>
                <Link to="/listyourplant" onClick={showNav}>
                    <span>Insert your plant</span>
                </Link>
                <Link to="/createnewplant" onClick={showNav}>
                    <span>Add New Plant to the DB</span>
                </Link>

                <span className="nav-btn-login">Login</span>
                <button className="nav-btn nav-close-btn" onClick={showNav}>
                    <FaTimes />
                </button>
            </nav>
            <button className="nav-btn" onClick={showNav}>
                <FaBars />
            </button>
        </header>
    );
}
