import React from 'react';

// import clientImg1 from '../../assets/images/resources/main-slider-satisfied-client-1-1.jpg';
// import clientImg2 from '../../assets/images/resources/main-slider-satisfied-client-1-2.jpg';
// import ratingLogo from '../../assets/images/resources/main-slider-rating-content-logo.png';
// import AdvanceCountUp from '../../components/elements/AdvanceCountUp';

const Banner: React.FC = () => {
    // const happyClients = 2000;
    // const positiveRating = 30;

    return (
        <section className="main-slider">
            <div className="main-slider__shape-bg-2"></div>
            <div className="main-slider__shape-bg"></div>
            <div className="main-slider__shape-bg-3 img-bounce"></div>
            <div className="main-slider__carousel owl-carousel owl-theme">
                <div className="item active">
                    <div className="container">
                        {/* Added left side padding via inline style */}
                        <div className="main-slider__content" style={{ paddingLeft: '40px' }}>
                            <div className="main-slider__title-box">
                                <h1 className="main-slider__title">
                                    Smart Recruitment <br />
                                    Solutions for{' '}
                                    <span>
                                        {' '}
                                        <br /> Australian Business <br /> Growth
                                    </span>
                                </h1>

                                <div className="main-slider__btn">
                                    <a href="/contact">
                                        <span className="icon-right"></span>
                                        Get Started
                                    </a>
                                </div>
                            </div>

                            <p className="main-slider__text">
                                DataPulse Technologies provides Labour Market Testing (LMT), <br />
                                recruitment,and workforce consulting services to help businesses hire <br />
                                skilled professionals, ensure compliance, and build strong teams across
                                Australia.
                            </p>

                            {/* <div className="main-slider__satisfied-client-and-rating-box">
                                <div className="main-slider__satisfied-client-box">
                                    <ul className="list-unstyled main-slider__satisfied-client-list">
                                        <li>
                                            <div className="main-slider__satisfied-client-img">
                                                <img src={clientImg1} alt="Client" />
                                            </div>
                                        </li>
                                        <li>
                                            <div className="main-slider__satisfied-client-img">
                                                <img src={clientImg2} alt="Client" />
                                            </div>
                                        </li>
                                    </ul>

                                    <div className="main-slider__satisfied-client-content">
                                        <div className="main-slider__satisfied-client-count count-box">
                                            <h4 className="count-text">
                                                <AdvanceCountUp ending={happyClients} />
                                            </h4>
                                            <span className="main-slider__satisfied-client-count-plus">+</span>
                                        </div>
                                        <p className="main-slider__satisfied-client-count-text">
                                            Businesses Supported
                                        </p>
                                    </div>
                                </div>

                                <div className="main-slider__rating-box">
                                    <div className="main-slider__rating-count count-box">
                                        <h3 className="count-text">
                                            <AdvanceCountUp ending={positiveRating} />
                                        </h3>
                                        <span className="main-slider__satisfied-client-count-letter">%</span>
                                    </div>
                                    <div className="main-slider__rating-content">
                                        <p className="main-slider__rating-content-sub-title">
                                            Client Satisfaction Rate
                                        </p>
                                        <div className="main-slider__rating-content-logo">
                                            <img src={ratingLogo} alt="Rating" />
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
