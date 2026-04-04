import React, { useContext } from 'react';
import { Link } from 'react-router';

import logo2 from '../../assets/images/custom/data-pulse.avif';
import FinrisContext from '../../components/context/FinrisContext';
import ManuList from '../common/ManuList';

const Header: React.FC = () => {
    const context = useContext(FinrisContext);
    if (!context) throw new Error("Context Null");
    const { setIsMobile } = context;
    return (
        <header className="main-header-two">
            {/* <div className="main-menu-two__top">
                <div className="main-menu-two__top-inner">
                    <ul className="list-unstyled main-menu-two__contact-list">
                        <li>
                            <div className="icon">
                                <i className="icon-phone"></i>
                            </div>
                            <div className="text">
                                <p><a href="tel:15502505260">+61 452 263 158</a></p>
                            </div>
                        </li>
                        <li>
                            <div className="icon">
                                <i className="icon-envelope"></i>
                            </div>
                            <div className="text">
                                <p><a href="mailto:admin@datapulsetech.com.au">admin@datapulsetech.com.au</a></p>
                            </div>
                        </li>
                        <li>
                            <div className="icon">
                                <i className="icon-pin"></i>
                            </div>
                            <div className="text">
                                <p>11/86 City Rd, Beenleigh QLD 4207</p>
                            </div>
                        </li>
                    </ul>
                    <div className="main-menu-two__top-right">
                        <div className="main-menu-two__social">
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-facebook"></i></a>
                            <a href="#"><i className="fab fa-pinterest-p"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div> */}
            <nav className="main-menu main-menu-two">
                <div className="main-menu-two__wrapper">
                    <div className="main-menu-two__wrapper-inner">
                        <div className="main-menu-two__left">
                            <div className="main-menu-two__logo">
                                <Link to="/">
                                    <img src={logo2} alt="Logo" max-width={230} />
                                </Link>
                            </div>
                        </div>
                        <div className="main-menu-two__main-menu-box">
                            <a href="#" className="mobile-nav__toggler" onClick={() => setIsMobile((pre) => !pre)}><i className="fa fa-bars"></i></a>
                            <ManuList />
                        </div>
                        <div className="main-menu-two__right">
                            {/* <div className="main-menu-two__call">
                                <div className="main-menu-two__call-icon">
                                    <i className="icon-phone"></i>
                                </div>
                                <div className="main-menu-two__btn-box">
                                    <p className="main-menu-two__call-sub-title">Call Anytime</p>
                                    <h5 className="main-menu-two__call-number">
                                        <a href="tel:61452263158">+61 452 263 158</a>
                                    </h5>
                                </div>
                            </div> */}
                            <div className="main-menu-two__btn-box">
                                <Link to="/contact" className="thm-btn thm-btn-two main-menu-two__btn">
                                    Get in Touch
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;