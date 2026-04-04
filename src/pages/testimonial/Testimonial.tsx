import React from 'react';
import HeaderCommon from '../../sections/common/HeaderCommon';
import BannerCommon from '../../sections/common/BannerCommon';
import TestimonialMain from '../../sections/testimonial/TestimonialMain';
import FooterCommon from '../../sections/common/FooterCommon';
import StrickyHeaderCommon from '../../sections/common/StrickyHeaderCommon';

const Testimonial: React.FC = () => {
    return (
        <div className="page-wrapper">
            <HeaderCommon />
            <BannerCommon title='Our' subtitle='Testimonials' breadcrumb='Our Testimonials' />
            <TestimonialMain />
            <FooterCommon />
            <StrickyHeaderCommon />
        </div>
    );
};

export default Testimonial;