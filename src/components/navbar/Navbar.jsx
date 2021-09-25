import React from 'react';

const Navbar = () => {
    return (
        <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
            <div className="navbar-brand">
                GitHub Search
            </div>
            <ul className='navbar-nav'>
                <li className="nav-item">
                    <a href="/" className='nav-link'>Main</a>
                </li>
                <li className="nav-item">
                    <a href="/about" className='nav-link'>Information</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;