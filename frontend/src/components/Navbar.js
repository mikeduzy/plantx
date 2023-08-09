import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
//import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Link
                        to="/market"
                    >
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Market
                        </Typography>
                        
                    </Link>

                    {/* <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton> */}

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}


// import { Link } from "react-router-dom";
// import React, { useState } from 'react';

// function Navbar() {
//     const [click, setClick] = useState(false);
//     const handleClick = () => setClick(!click);
//     // const closeMobileMenu = () => setClick(false);
//     return (
//         <>
//             <nav className="navbar">
//                 <div className="navbar-container">

//                     <Link
//                         to="/market"
//                     >
                //                         Market
                //                     </Link>;
                
//                     {/* <Link to="/" className="navbar-logo">
//                         PlantX <i class="fa-solid fa-leaf"></i>
//                     </Link>
//                     <div className='menu-icon' onClick={handleClick}>
//                         <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
//                     </div>
//                     <ul className={click ? 'nav-menu active' : 'nav-menu'}>
//                         <li className='nav-item'>
//                             <Link to='/' className='nav-links' onClick={closeMobileMenu}>
//                                 Home
//                             </Link>
//                         </li>
//                         <li className='nav-item'>
//                             <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
//                                About
//                            </Link>
//                        </li>
//                         <li className='nav-item'>
//                             <Link to='/sign-up' className='nav-links' onClick={closeMobileMenu}>
//                                Sign up
//                             </Link>
//                         </li>
//                     </ul> */}
//                 </div>
//             </nav>
//         </>
//     )
// }

//export default Navbar