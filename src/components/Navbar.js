import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header>
            <Link to="/" className='links'>Principal</Link>
            <Link to="/Buscar" className='links'>Buscar Personaje</Link>
        </header>
    );
};

export default Navbar;
