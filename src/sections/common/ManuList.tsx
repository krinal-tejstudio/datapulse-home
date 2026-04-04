import React from 'react';
import { Link } from 'react-router';

const ManuList: React.FC = () => {
    return (
        <ul className="main-menu__list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/resources">Resources</Link></li>
            <li><Link to="/services">Service</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
    );
}
export default ManuList;