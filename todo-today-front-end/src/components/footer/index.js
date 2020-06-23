import React from 'react';
import { Link } from 'react-router-dom';
import './footer.scss';

export default function Footer() {
    return (
        <footer>
            <span>&copy; 2020 M. Charles Barnhart</span>
            <span className="grow"><Link to="/about">About Us</Link></span>
            <span className="grow"><Link to="/license">License</Link></span>
        </footer>
    );
}
