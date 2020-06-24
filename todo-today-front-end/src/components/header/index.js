import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.scss';

import useTheme from '../../context/theme-context';

export default function Header() {
    const theme = useTheme();

    return (
        <header className={theme.mode}>
            <button onClick={() => theme.toggleMode()}>Toggle Theme</button>
            <h1>To-Do Today</h1>
            <h3>Get it To-DONE!&trade;</h3>
            <nav>
                <button className="board-button"><NavLink to="/board">the BOARD</NavLink></button>
                <button className="home-button"><NavLink exact to="/">the HOME</NavLink></button>
            </nav>
        </header>
    )
}