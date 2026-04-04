import React from 'react';
import HeaderCommon from '../../sections/common/HeaderCommon';
import BannerCommon from '../../sections/common/BannerCommon';
import FooterCommon from '../../sections/common/FooterCommon';
import StrickyHeaderCommon from '../../sections/common/StrickyHeaderCommon';
import errorImg from "../../assets/images/resources/error-page-img1.png"
import { Link } from 'react-router';
const Error: React.FC = () => {
    return (
        <div className="page-wrapper">
            <HeaderCommon />
            <BannerCommon title='404' subtitle='Error' breadcrumb='404 Error' />
            <section className="error-page">
                <div className="container">
                    <div className="error-page__inner text-center">
                        <div className="error-page__img float-bob-y">
                            <img src={errorImg} alt="Error Image" />
                        </div>

                        <div className="error-page__content">
                            <h2>Oops! Page Not Found!</h2>
                            <p>The page you are looking for does not exist. It might have been moved or deleted.</p>
                            <div className="btn-box">
                                <Link className="thm-btn" to="/"> <span className="icon-right"></span> Back To Home</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <FooterCommon />
            <StrickyHeaderCommon />
        </div>
    );
};

export default Error;