import React from 'react';
import HeaderCommon from '../../sections/common/HeaderCommon';
import BannerCommon from '../../sections/common/BannerCommon';
import FooterCommon from '../../sections/common/FooterCommon';
import StrickyHeaderCommon from '../../sections/common/StrickyHeaderCommon';
import TestimonialCarouselMain from '../../sections/testimonial/TestimonialCarouselMain';

const TestimonialCarousel: React.FC = () => {
    return (
        <div className="page-wrapper">
            <HeaderCommon />
            <BannerCommon title='Testimonial' subtitle='Carousel' breadcrumb='Testimonial Carousel' />
            <TestimonialCarouselMain />
            <FooterCommon />
            <StrickyHeaderCommon />
        </div>
    );
};

export default TestimonialCarousel;