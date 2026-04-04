import React, { useContext } from 'react';
import { motion } from "framer-motion";
import aboutImg4 from "../../assets/images/icon/about-two-icon-4.png";
import aboutImg5 from "../../assets/images/icon/about-three-points-icon-1.png";
import aboutImg6 from "../../assets/images/icon/about-three-points-icon-2.png";
import aboutTwoImg1 from "../../assets/images/custom/about-2.webp";
import FinrisContext from '../../components/context/FinrisContext';
import TextAnimation from '../../components/elements/TextAnimation';

const AboutUsThree: React.FC = () => {
    const context = useContext(FinrisContext);
    if (!context) throw new Error("Context is null");
    // const { handleVideoClick } = context;

    return (
        <>
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
                                        <span className="section-title-two__tagline">About DataPulse</span>
                                    </div>
                                    <h2 className="section-title-two__title title-animation">
                                        <TextAnimation text='Workforce Solutions for'  textColor='black' isSpan={false}/>
                                        <TextAnimation text='Modern Australian Businesses' fontSize='42' textColor='#00C2A8' isSpan={false} />
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
                                Data Pulse Technologies provides workforce solutions and Labour Market Testing (LMT) support to businesses across Australia.
                                We assist employers with structured job advertising, candidate screening, and compliant documentation to meet regulatory requirements. 
                                Our streamlined process ensures accurate LMT reports, transparency, and full compliance.
                                </p>
                                <div className="about-two__points-box">
                                    <ul className="list-unstyled about-two__points">
                                        <li data-aos="fade-right" data-aos-duration="1200" data-aos-delay="100">
                                            <div className="icon">
                                                <img src={aboutImg4} alt="Innovative Strategies" />
                                            </div>
                                            <div className="content">
                                                <h3>DataPulse Technologies</h3>
                                                <p>
                                                    Recruitment & Workforce Solutions
                                                </p>
                                            </div>
                                        </li>

                                        <li data-aos="fade-right" data-aos-duration="1200" data-aos-delay="200">
                                            <div className="icon">
                                                <img src={aboutImg5} alt="Visual Design Excellence" />
                                            </div>
                                            <div className="content">
                                                <h3>Labour Market Testing (LMT)</h3>
                                                <p>
                                                We provide structured and compliant Labour Market Testing
                                                services to support visa and recruitment requirements across Australia.                                                
                                                </p>
                                            </div>
                                        </li>

                                        <li data-aos="fade-right" data-aos-duration="1200" data-aos-delay="200">
                                            <div className="icon">
                                                <img src={aboutImg6} alt="Visual Design Excellence" />
                                            </div>
                                            <div className="content">
                                                <h3>Recruitment & Workforce Support</h3>
                                                <p>
                                                In addition to Labour Market Testing, we offer recruitment consulting and workforce
                                                support services to help businesses find reliable and suitable candidates efficiently.                                                
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutUsThree;