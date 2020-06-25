import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.scss';

import useTheme from '../../contexts/theme';

export default function Header() {
    const theme = useTheme();

    return (
        <header>
            <h1>To-Do Today</h1>
            <h3>Get it To-DONE!&trade;</h3>
            <nav>
                <button className="board-button"><NavLink to="/board">the BOARD</NavLink></button>
                <button onClick={() => theme.toggleMode()}>Toggle Theme</button>
                <button className="home-button"><NavLink exact to="/">the HOME</NavLink></button>
            </nav>
        </header>
    )
}