import React from 'react';
import Header from '../../sections/home-two/Header';
import Banner from '../../sections/home-two/Banner';
import AboutTwo from '../../sections/home-two/AboutTwo';
import ServiceTwo from '../../sections/home-two/ServiceTwo';
import Seo from '../../components/elements/Seo';
// import WhyChooseTwo from '../../sections/home-two/WhyChooseTwo';
import WhyChooseA from '../../sections/about/WhyChooseA';
// import CounterTwo from '../../sections/home-two/CounterTwo';
import ProcessTwo from '../../sections/home-two/ProcessTwo';
import SlidingTextTwo from '../../sections/home-two/SlidingTextTwo';
// import PortfolioTwo from '../../sections/home-two/PortfolioTwo';
// import TeamTwo from '../../sections/home-two/TeamTwo';
// import TestimonialsTwo from '../../sections/home-two/TestimonialsTwo';
// import BlogTwo from '../../sections/home-two/BlogTwo';
import CtaCommon from '../../sections/common/CtaCommon';
import FooterTwo from '../../sections/home-two/FooterTwo';
import StrickyHeaderTwo from '../../sections/home-two/StrickyHeaderTwo';

const HomeTwo: React.FC = () => {
    return (
        <div className="page-wrapper">
            <Seo
                title="DataPulse Technologies | Recruitment & Workforce Solutions"
                description="DataPulse Technologies provides Labour Market Testing (LMT), recruitment, and workforce consulting solutions across Australia. Hire smarter with compliant, end-to-end support."
                canonicalPath="/"
            />
            <Header />
            <Banner />
            <AboutTwo />
            <ServiceTwo />
            {/* <WhyChooseTwo /> */}
            <CtaCommon />
            <WhyChooseA />
            {/* <CounterTwo /> */}
            <ProcessTwo />
            <SlidingTextTwo />
            {/* <PortfolioTwo />
            <TeamTwo />
            <TestimonialsTwo />
            <BlogTwo /> */}
            <FooterTwo />
            <StrickyHeaderTwo />
        </div>
    );
};

export default HomeTwo;