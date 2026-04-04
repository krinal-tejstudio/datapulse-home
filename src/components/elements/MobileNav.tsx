import React, { useContext } from 'react';
import logo from "../../assets/images/custom/data-pulse.avif";
import FinrisContext from '../context/FinrisContext';
import { Link } from 'react-router';

const MobileNav: React.FC = () => {
    const context = useContext(FinrisContext);
    if (!context) throw new Error("FinrisContext is null");

    const { isMobile, setIsMobile } = context;

    const closeNav = () => {
        setIsMobile((pre) => !pre);
    };
    const closeMobileState = () => {
        setIsMobile(false)
    }
    return (
        <div className={`mobile-nav__wrapper ${isMobile ? "expanded" : ""}`}>
            <div onClick={closeNav} className="mobile-nav__overlay mobile-nav__toggler"></div>

            <div className="mobile-nav__content" style={{ width: '300px' }}>
                <span onClick={closeNav} className="mobile-nav__close mobile-nav__toggler">
                    <i className="fa fa-times"></i>
                </span>

                <div className="logo-box">
                    <Link to="/" onClick={closeNav} aria-label="logo image">
                        <img src={logo} width="140" alt="Finris Logo" />
                    </Link>
                </div>

                {/* ======= NAV MENU ======= */}
                <div className="mobile-nav__container">
                    <ul className="main-menu__list">
                        <li><Link onClick={closeMobileState} to="/">Home</Link></li>
                        <li><Link onClick={closeMobileState} to="/about">About</Link></li>
                        <li><Link onClick={closeMobileState} to="/resources">Resources</Link></li>
                        <li><Link onClick={closeMobileState} to="/services">Service</Link></li>
                        <li><Link onClick={closeMobileState} to="/contact">Contact</Link></li>
                    </ul>
                </div>

                {/* ======= CONTACT & SOCIAL ======= */}
                <ul className="mobile-nav__contact list-unstyled">
                    <li>
                        <i className="fa fa-envelope"></i>
                        <Link to="mailto:dan@datapulsetech.com.au">dan@datapulsetech.com.au<br />
                        <a href="mailto:admin@datapulsetech.com.au">admin@datapulsetech.com.au</a>
                        </Link>
                    </li>
                    <li>
                        <i className="fas fa-phone"></i>
                        <Link to="tel:61452263158">+61 452 263 158</Link>
                    </li>
                </ul>

                <div className="mobile-nav__top">
                    <div className="mobile-nav__social">
                        <Link to="https://www.linkedin.com/company/datapulse-technologies260/" className="fab fa-linkedin"></Link>
                        <Link to="https://www.facebook.com/share/1E5WDDPfr3/?mibextid=wwXIfr" className="fab fa-facebook-square"></Link>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default MobileNav;
