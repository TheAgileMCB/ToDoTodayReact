import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.scss';

export default function Header() {
    return (
        <header>
            <h1>To-Do Today</h1>
            <h3>Get it To-DONE!&trade;</h3>
            <nav>
                <button className="board-button"><NavLink to="/board">the BOARD</NavLink></button>
                <button className="home-button"><NavLink exact to="/">the HOME</NavLink></button>
            </nav>
        </header>
    )
}