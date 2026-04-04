import React from 'react';
import { Link } from 'react-router';
import { servicesTow } from '../../contents/service/service';
import type { ServicesTow } from '../../contents/service/type';
import TextAnimation from '../../components/elements/TextAnimation';
import { motion } from "framer-motion"
const ServiceTwo: React.FC = () => {
    return (
        <section className="services-two">
            <div className="services-two__bg-shape"></div>
            <div className="container">
                {/* Section Title */}
                <div className="section-title-two text-center sec-title-animation animation-style1">
                    <div className="section-title-two__tagline-box justify-content-center">
                        <div className="section-title-two__tagline-icon-box">
                            <div className="section-title-two__tagline-icon-1"></div>
                            <div className="section-title-two__tagline-icon-2"></div>
                        </div>
                        <span className="section-title-two__tagline">Services</span>
                    </div>
                    <h2 className="section-title-two__title title-animation">
                        <TextAnimation text='We Deliver Professional Recruitment' textColor='black' isSpan={false} />
                        <TextAnimation text='and Workforce Consulting Solutions' textColor='#00C2A8' isSpan={false} />
                    </h2>
                </div>

                {/* Service Cards */}
                <div className="row" style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {servicesTow.map((service: ServicesTow) => (
                        <motion.div
                            key={service.id}
                            className="col-xl-3 col-lg-6 col-md-6 d-flex"
                            style={{ display: 'flex' }}
                            initial={{ y: service?.id % 2 === 0 ? -60 : 60, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{
                                duration: 1,
                                ease: "easeOut"
                            }}
                            viewport={{ amount: 0.01, once: true }}
                        >
                            <div
                                className="services-two__single"
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    flex: '1 1 100%',
                                    height: '100%',
                                    minHeight: 350, // You can adjust minHeight for your card,
                                    boxSizing: 'border-box',
                                }}
                            >
                                <div className="services-two__icon" style={{ background: 'black', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', width: 88, height: 88, margin: '0 auto 18px auto' }}>
                                    <img src={service.icon} alt={service.title} style={{ width: 55, height: 55, objectFit: 'contain' }} />
                                </div>

                                <h3 className="services-two__title" style={{ minHeight: 54, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                                    <Link to={service.link}>{service.title}</Link>
                                </h3>

                                <p className="services-two__text" style={{ flexGrow: 1, textAlign: 'center' }}>{service.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
                {/* Single Centered Button */}
                <div className="services-two__btn-box" style={{textAlign: 'center', marginTop: 30}}>
                    <Link to="/services" className="services-two__btn thm-btn thm-btn-two">
                        <span className="icon-right"></span> Know More
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ServiceTwo;
