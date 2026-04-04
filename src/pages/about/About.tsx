import React from 'react';
import Header from '../../sections/home-two/Header';
import InnerBannerTwo from '../../sections/home-two/InnerBannerTwo';
import StrickyHeaderTwo from '../../sections/home-two/StrickyHeaderTwo';
import AboutUsThree from '../../sections/about/AboutUsThree';
import WhyChooseA from '../../sections/about/WhyChooseA';
import Seo from '../../components/elements/Seo';
// import CounterA from '../../sections/about/CounterA';
// import TestimonialsA from '../../sections/about/TestimonialsA';
// import AwardsA from '../../sections/about/AwardsA';
import CtaCommon from '../../sections/common/CtaCommon';
import FooterTwo from '../../sections/home-two/FooterTwo';

const About: React.FC = () => {
    return (
        <div className="page-wrapper">
            <Seo
                title="About Us | DataPulse Technologies"
                description="Learn about DataPulse Technologies—our mission, expertise, and approach to compliant Labour Market Testing, recruitment, and workforce solutions."
                canonicalPath="/about"
            />
            <Header />
            <InnerBannerTwo
                title="About"
                subtitle="Us"
                breadcrumb="About Us"
                background="linear-gradient(135deg, #061044, #0a2f62)"
            />
            <AboutUsThree />
            <WhyChooseA />
            {/* <CounterA /> */}
            {/* <TestimonialsA /> */}
            {/* <AwardsA /> */}
            <CtaCommon />
            <FooterTwo />
            <StrickyHeaderTwo />
        </div>
    );
};

export default About;