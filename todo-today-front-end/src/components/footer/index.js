import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer>
            <span>&copy; 2020 M. Charles Barnhart</span>
            <span><Link to="/about">About Us</Link></span>
            <span><Link to="/license">License</Link></span>
        </footer>
    );
}
