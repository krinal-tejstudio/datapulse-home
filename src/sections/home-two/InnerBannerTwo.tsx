import React from 'react';
import { Link } from 'react-router';

export interface InnerBannerTwoProps {
    title: string;
    subtitle: string;
    breadcrumb: string;
    breadcrumbLink?: string;
    breadcrumb2?: string;
    /** Optional background (e.g. gradient); omit to match home main-slider default. */
    background?: string;
}

const InnerBannerTwo: React.FC<InnerBannerTwoProps> = ({
    title,
    subtitle,
    breadcrumb,
    breadcrumb2 = '',
    breadcrumbLink = '',
    background,
}) => {
    return (
        <section
            className="main-slider main-slider--page"
            style={background ? { background } : undefined}
        >
            <div className="main-slider__shape-bg-2"></div>
            <div className="main-slider__shape-bg"></div>
            <div className="main-slider__shape-bg-3 img-bounce"></div>
            <div className="main-slider__carousel owl-carousel owl-theme">
                <div className="item active">
                    <div className="container">
                        <div className="main-slider__content">
                            <div className="main-slider__title-box">
                                <h1 className="main-slider__title">
                                    {title}
                                    <span> {subtitle}</span>
                                </h1>
                            </div>

                            <div className="thm-breadcrumb__inner">
                                <ul className="thm-breadcrumb list-unstyled">
                                    <li>
                                        <i className="icon-home"></i> <Link to="/">Home</Link>
                                    </li>
                                    <li>
                                        <span></span>
                                    </li>
                                    {breadcrumb2 ? (
                                        <>
                                            <li>
                                                <Link to={breadcrumbLink}>{breadcrumb}</Link>
                                            </li>
                                            <li>
                                                <span></span>
                                            </li>
                                            <li>{breadcrumb2}</li>
                                        </>
                                    ) : (
                                        <li>{breadcrumb}</li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InnerBannerTwo;
