import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navigation">
            <ul>
                <NavLink to="/favoris" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Favoris</li>
                </NavLink>
                <NavLink to="/pokemon" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Pokemon</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;