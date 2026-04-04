import React from 'react';
import { Link } from 'react-router';
import { motion } from "framer-motion"
import aboutTwoImg1 from '../../assets/images/custom/about-1.webp';
import aboutTwoIcon1 from '../../assets/images/icon/about-two-icon-1.png';
import aboutTwoIcon2 from '../../assets/images/icon/about-two-icon-2.png';
import aboutTwoIcon3 from '../../assets/images/icon/about-two-icon-3.png';
import aboutTwoIcon4 from '../../assets/images/icon/about-two-icon-4.png';
import TextAnimation from '../../components/elements/TextAnimation';

const AboutTwo: React.FC = () => {
    return (
        <section className="about-two">
            <div className="about-two__shape-box">
                <div className="about-two__shape-1">
                    <div className="about-two__shape-2">
                        <div className="about-two__shape-3"></div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    {/* Left Section */}
                    <motion.div
                        className="col-xl-6"
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                            duration: 1,
                            ease: "easeOut"
                        }}
                        viewport={{ amount: 0.01, once: true }}
                    >
                        <div className="about-two__left">
                            <div className="section-title-two text-left sec-title-animation animation-style2">
                                <div className="section-title-two__tagline-box">
                                    <div className="section-title-two__tagline-icon-box">
                                        <div className="section-title-two__tagline-icon-1"></div>
                                        <div className="section-title-two__tagline-icon-2"></div>
                                    </div>
                                    <span className="section-title-two__tagline">About Us</span>
                                </div>
                                <h2 className="section-title-two__title title-animation">
                                    <TextAnimation text='Helping Businesses Find the Right Talent Reliable Recruitment & Labour Market Testing Solutions.' textColor='black' isSpan={false} />
                                    {/* <TextAnimation text='Recruitment & Labour Market Testing Solutions.' fontSize='42' textColor='#00C2A8' isSpan={false} /> */}

                                </h2>
                            </div>

                            <div className="about-two__img">
                                <img src={aboutTwoImg1} alt="About Us" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Section */}
                    <div className="col-xl-6">
                        <div className="about-two__right">
                            <p className="about-two__text">
                            DataPulse Technologies is a recruitment and consulting company based in Australia, 
                            dedicated to helping businesses find skilled professionals and build strong workforce solutions. 
                            We specialize in Labour Market Testing (LMT), talent recruitment, consulting, and digital services 
                            that support business growth and compliance with Australian employment standards.
                            </p>

                            <div className="about-two__points-box">
                                <ul className="list-unstyled about-two__points">
                                    <li data-aos="fade-right" data-aos-duration="1200" data-aos-delay="100">
                                        <div className="icon">
                                            <img src={aboutTwoIcon1} alt="Innovative Strategies" />
                                        </div>
                                        <div className="content">
                                            <h3>Fast Hiring</h3>
                                            <p>
                                            Rapid turnaround on recruitment and LMT reporting.
                                            </p>
                                        </div>
                                    </li>

                                    <li data-aos="fade-right" data-aos-duration="1200" data-aos-delay="200">
                                        <div className="icon">
                                            <img src={aboutTwoIcon2} alt="Visual Design Excellence" />
                                        </div>
                                        <div className="content">
                                            <h3>Compliance Assurance</h3>
                                            <p>
                                            DHA-compliant, nomination-ready documentation.
                                            </p>
                                        </div>
                                    </li>
                                </ul>

                                <ul className="list-unstyled about-two__points">
                                    <li data-aos="fade-left" data-aos-duration="1200" data-aos-delay="150">
                                        <div className="icon">
                                            <img src={aboutTwoIcon3} alt="Brand Storytelling" />
                                        </div>
                                        <div className="content">
                                            <h3>Skilled Talent</h3>
                                            <p>
                                            Access to pre-vetted, qualified candidates Australia-wide.
                                            </p>
                                        </div>
                                    </li>

                                    <li data-aos="fade-left" data-aos-duration="1200" data-aos-delay="250">
                                        <div className="icon">
                                            <img src={aboutTwoIcon4} alt="Cross-Platform Expertise" />
                                        </div>
                                        <div className="content">
                                            <h3>Tailored Solutions</h3>
                                            <p>
                                            Custom workforce strategies for every business need.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="about-two__bottom">
                                <div className="about-two__btn-and-call-box">
                                    <div className="about-two__btn-box">
                                        <Link to="/about" className="about-two__btn thm-btn thm-btn-two">
                                            <span className="icon-right"></span> Know More
                                        </Link>
                                    </div>

                                    <div className="about-two__call">
                                        <div className="about-two__call-icon">
                                            <i className="icon-phone"></i>
                                        </div>
                                        <div className="about-two__call-content">
                                            <p className="about-two__call-sub-title">Connect us</p>
                                            <h3 className="about-two__call-number">
                                                <a href="tel:61452263158">+61 452 263 158</a>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutTwo;
