import React, { useContext, useEffect, useState } from 'react';
import FinrisContext from '../../components/context/FinrisContext';
import { Link, useLocation } from 'react-router';

import logo2 from '../../assets/images/resources/logo-2.png';

const StrickyHeaderCommon: React.FC = () => {
    const context = useContext(FinrisContext);
    const pathName: string = useLocation().pathname;
    if (!context) throw new Error("Context Null");
    const { setIsMobile } = context;
    const [isStick, setIsSticky] = useState<boolean>(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={`stricky-header stricked-menu main-menu main-menu-two ${isStick ? 'stricky-fixed' : ''}`}>
            <div className="sticky-header__content">
                <div className="main-menu-two__wrapper">
                    <div className="main-menu-two__wrapper-inner">
                        <div className="main-menu-two__left">
                            <div className="main-menu-two__logo">
                                <Link to="/">
                                    <img src={logo2} alt="Logo" />
                                </Link>
                            </div>
                        </div>
                        <div className="main-menu-two__main-menu-box">
                            <a href="#" className="mobile-nav__toggler" onClick={() => setIsMobile((pre) => !pre)}><i className="fa fa-bars"></i></a>
                            <ul className="main-menu__list">
                                <li className={`${pathName === '/' ? 'current' : ''}`}>
                                    <Link to="/">Home</Link>
                                </li>
                                <li className={`${pathName === '/about' ? 'current' : ''}`}>
                                    <Link to="/about">About</Link>
                                </li>
                                <li className={`${pathName === '/resources' ? 'current' : ''}`}>
                                    <Link to="/resources">Resources</Link>
                                </li>
                                <li className={`${pathName === '/services' ? 'current' : ''}`}>
                                    <Link to="/services">Service</Link>
                                </li>
                                <li className={`${pathName === '/contact' ? 'current' : ''}`}>
                                    <Link to="/contact">Contact</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="main-menu-two__right">
                            <div className="main-menu-two__call">
                                <div className="main-menu-two__call-icon">
                                    <i className="icon-phone"></i>
                                </div>
                                <div className="main-menu-two__call-content">
                                    <p className="main-menu-two__call-sub-title">Call Anytime</p>
                                    <h5 className="main-menu-two__call-number">
                                        <a href="tel:9288006780">+92 ( 8800 ) - 6780</a>
                                    </h5>
                                </div>
                            </div>
                            <div className="main-menu-two__btn-box">
                                <Link to="/contact" className="thm-btn thm-btn-two main-menu-two__btn">
                                    Contact us
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StrickyHeaderCommon;