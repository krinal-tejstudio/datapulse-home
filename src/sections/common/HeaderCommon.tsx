import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router';

import logo2 from '../../assets/images/resources/logo-2.png';
import FinrisContext from '../../components/context/FinrisContext';
import { HOME_LINKS } from '../../contents/nav/nav';

const HeaderCommon: React.FC = () => {
    const context = useContext(FinrisContext);
    const pathName: string = useLocation().pathname;
    if (!context) throw new Error("Context Null");
    const { setIsMobile, setIsSearch } = context;
    const isCurrent = (pathArray: string[]): boolean => {
        return pathArray.includes(pathName);
    };
    return (
        <header className="main-header-two">
            <div className="main-menu-two__top">
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
                                <p><a href="mailto:info@Finris24.com">info@Finris24.com</a></p>
                            </div>
                        </li>
                        <li>
                            <div className="icon">
                                <i className="icon-pin"></i>
                            </div>
                            <div className="text">
                                <p>4124 Cimmaron Road, CA 92806</p>
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
            </div>
            <nav className="main-menu main-menu-two">
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
                                <li className="dropdown">
                                    <Link to="#">
                                        Home
                                    </Link>
                                    <ul>
                                        {
                                            HOME_LINKS.map(li => <li key={li?.id}><Link to={li?.link}>{li?.value}</Link></li>)
                                        }
                                    </ul>
                                </li>
                                <li className={`${pathName === '/about' ? 'current' : ''}`}>
                                    <Link to="/about">About</Link>
                                </li>
                                <li className={`dropdown ${isCurrent(["/team", "/resources", "/team-details", "/portfolio", "/portfolio-details", "/testimonials", "/testimonial-carousel", "/pricing", "/gallery", "/faq", "/coming-soon", "/404"]) ? 'current' : ''}`}>
                                    <a href="#">Pages</a>
                                    <ul>
                                        <li><Link to="/team">Team</Link></li>
                                        <li><Link to="/resources">Resources</Link></li>
                                        <li><Link to="/team-details">Team Details</Link></li>
                                        <li><Link to="/portfolio">Portfolio</Link></li>
                                        <li><Link to="/portfolio-details">Portfolio Details</Link></li>
                                        <li><Link to="/testimonials">Testimonials</Link></li>
                                        <li><Link to="/testimonial-carousel">Testimonial Carousel</Link></li>
                                        <li><Link to="/pricing">Pricing</Link></li>
                                        <li><Link to="/gallery">Gallery</Link></li>
                                        <li><Link to="/faq">FAQs</Link></li>
                                        <li><Link to="/404">404 Error</Link></li>
                                        <li><Link to="/coming-soon">Coming Soon</Link></li>
                                    </ul>
                                </li>
                                <li className={`dropdown ${isCurrent(["/services", "/digital-marketing", "/web-design-development", "/search-engine-optimization", "/design-and-branding", "/app-development"]) ? 'current' : ''}`}>
                                    <a href="#">Services</a>
                                    <ul>
                                        <li><Link to="/services">Services</Link></li>
                                        <li><Link to="/digital-marketing">Digital Marketing</Link></li>
                                        <li><Link to="/web-design-development">Web Design & Development</Link></li>
                                        <li><Link to="/search-engine-optimization">Search Engine Optimization</Link></li>
                                        <li><Link to="/design-and-branding">Design & Branding</Link></li>
                                        <li><Link to="/app-development">App Development</Link></li>
                                    </ul>
                                </li>
                                <li className={`dropdown ${isCurrent(["/products", "/product-details", "/cart", "/checkout", "/wishlist", "/sign-up", "/login"]) ? 'current' : ''}`}>
                                    <a href="#">Shop</a>
                                    <ul>
                                        <li><Link to="/products">Products</Link></li>
                                        <li><Link to="/product-details">Product Details</Link></li>
                                        <li><Link to="/cart">Cart</Link></li>
                                        <li><Link to="/checkout">Checkout</Link></li>
                                        <li><Link to="/wishlist">Wishlist</Link></li>
                                        <li><Link to="/sign-up">Sign Up</Link></li>
                                        <li><Link to="/login">Login</Link></li>
                                    </ul>
                                </li>
                                <li className={`dropdown ${isCurrent(["/blog", "/blog-carousel", "/blog-list", "/blog-details"]) ? 'current' : ''}`}>
                                    <a href="#">Blog</a>
                                    <ul>
                                        <li><Link to="/blog">Blog</Link></li>
                                        <li><Link to="/blog-carousel">Blog Carousel</Link></li>
                                        <li><Link to="/blog-list">Blog List</Link></li>
                                        <li><Link to="/blog-details">Blog Details</Link></li>
                                    </ul>
                                </li>
                                <li className={`${isCurrent(["/contact"]) ? 'current' : ''}`}>
                                    <Link to="/contact">Contact</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="main-menu-two__right">
                            {/* <div className="main-menu-two__call">
                                <div className="main-menu-two__call-icon">
                                    <i className="icon-phone"></i>
                                </div>
                                <div className="main-menu-two__call-content">
                                    <p className="main-menu-two__call-sub-title">Call Anytime</p>
                                    <h5 className="main-menu-two__call-number">
                                        <a href="tel:9288006780">+92 ( 8800 ) - 6780</a>
                                    </h5>
                                </div>
                            </div> */}
                            <div className="main-menu-two__search-cart-box">
                                <div className="main-menu-two__search-cart-box">
                                    <div className="main-menu-two__search-box" onClick={() => setIsSearch(pre => !pre)}>
                                        <span className="main-menu-two__search searcher-toggler-box icon-search-1"></span>
                                    </div>
                                    <div className="main-menu-two__cart-box">
                                        <Link to="/cart" className="main-menu-two__cart icon-shopping-cart"></Link>
                                    </div>
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
            </nav>
        </header>
    );
};

export default HeaderCommon;