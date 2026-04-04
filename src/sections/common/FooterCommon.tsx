import React from 'react';
import { Link } from 'react-router';
import footerLogo from '../../assets/images/custom/data-pulse.avif';
import shapeBg from '../../assets/images/shapes/site-footer-two-shape-bg.png';
import shapeStar from '../../assets/images/shapes/site-footer-two-star.png';

const FooterCommon: React.FC = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        form.reset();
    };

    return (
        <>
            {/* Newsletter Section */}
            <section className="newsletter-two">
                <div className="newsletter-two__big-text">Subscribe Newsletter</div>
                <div className="container">
                    <div className="newsletter-two__inner">
                        <div className="newsletter-two__left">
                            <h2 className="newsletter-two__title">Subscribe Newsletter</h2>
                            <p className="newsletter-two__text">
                                Stay updated with labour market news, hiring insights, and <br />
                                workforce solutions from DataPulse Technologies.
                            </p>
                        </div>
                        <div className="newsletter-two__right">
                            <form className="newsletter-two__form" onSubmit={handleSubmit}>
                                <div className="newsletter-two__input">
                                    <input type="text" placeholder="Enter Your Email" required />
                                </div>
                                <button type="button" className="newsletter-two__btn">
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="site-footer-two">
                <div
                    className="site-footer-two__shape-bg"
                    style={{ backgroundImage: `url(${shapeBg})` }}
                ></div>
                <div className="site-footer-two__shape-1 zoominout"></div>
                <div className="site-footer-two__shape-2 zoominout"></div>

                {/* Top Section */}
                <div className="site-footer-two__top">
                    <div className="site-footer-two__main-content">
                        <div className="container">
                            <div className="site-footer-two__main-content-inner">
                                <div className="site-footer-two__star rotate-me">
                                    <img src={shapeStar} alt="Star Shape" />
                                </div>

                                <div className="row">
                                    {/* About Widget */}
                                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                                        <div className="footer-widget-two__about">
                                            <div className="footer-widget-two__about-logo">
                                                <Link to="/">
                                                    <img src={footerLogo} alt="Footer Logo" />
                                                </Link>
                                            </div>
                                            <p className="footer-widget-two__about-text">
                                                DataPulse Technologies provides Labour Market Testing (LMT), recruitment, and workforce consulting
                                                solutions across Australia.
                                            </p>
                                            <ul className="footer-widget-two__get-in-touch-list list-unstyled">
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-pin"></span>
                                                    </div>
                                                    <div className="text">
                                                        <p>
                                                            11/86 City Rd <br /> Beenleigh QLD 4207
                                                        </p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-envelope"></span>
                                                    </div>
                                                    <div className="text">
                                                        <p>
                                                            <a href="mailto:dan@datapulsetech.com.au">dan@datapulsetech.com.au</a>
                                                            <br />
                                                            <a href="mailto:admin@datapulsetech.com.au">admin@datapulsetech.com.au</a>
                                                        </p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-phone"></span>
                                                    </div>
                                                    <div className="text">
                                                        <p>
                                                            <a href="tel:+61452263158">+61 452 263 158</a>
                                                        </p>
                                                    </div>
                                                </li>
                                            </ul>

                                            <div className="site-footer-two__social-box">
                                                <p className="site-footer-two__social-title">Stay Connected</p>
                                                <div className="site-footer-two__social">
                                                    <a
                                                        href="https://www.linkedin.com/company/datapulse-technologies260/"
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        aria-label="DataPulse on LinkedIn"
                                                    >
                                                        <i className="icon-linkedin"></i>
                                                    </a>
                                                    <a
                                                        href="https://www.facebook.com/share/1E5WDDPfr3/?mibextid=wwXIfr"
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        aria-label="DataPulse on Facebook"
                                                    >
                                                        <i className="icon-facebook"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Quick Links */}
                                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                                        <div className="footer-widget-two__quick-links">
                                            <h4 className="footer-widget-two__title">Quick Links</h4>
                                            <ul className="footer-widget-two__quick-links-list list-unstyled">
                                                <li><Link to="/">Home</Link></li>
                                                <li><Link to="/about">About</Link></li>
                                                <li><Link to="/resources">Resources</Link></li>
                                                <li><Link to="/services">Service</Link></li>
                                                <li><Link to="/contact">Contact</Link></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-xl-4 col-lg-12 col-md-12 wow fadeInUp" data-wow-delay="300ms">
                                        <div className="footer-widget-two__support">
                                            <h4 className="footer-widget-two__title">Contact</h4>
                                            <ul className="footer-widget-two__quick-links-list footer-widget-two__support-list list-unstyled">
                                                <li>
                                                    <a href="tel:+61452263158">+61 452 263 158</a>
                                                </li>
                                                <li>
                                                    <a href="mailto:dan@datapulsetech.com.au">dan@datapulsetech.com.au</a>
                                                </li>
                                                <li>
                                                    <a href="mailto:admin@datapulsetech.com.au">admin@datapulsetech.com.au</a>
                                                </li>
                                                <li>
                                                    11/86 City Rd Beenleigh QLD 4207
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="site-footer-two__bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="site-footer-two__bottom-inner">
                                    <div className="site-footer-two__copyright">
                                        <p className="site-footer-two__copyright-text">
                                            &copy; 2026 <b>DataPulse</b>. All Rights Reserved. <span style={{ marginLeft: 10 }}>ABN : 17 681 371 880</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default FooterCommon;
