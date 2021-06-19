import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div className="main-menu-items">
            <ul>
                <li>
                    <Link to="/registeration">Registeration</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </ul>
        </div>
    );
}

export default Menu;
