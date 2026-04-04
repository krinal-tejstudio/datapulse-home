import React from 'react';
import Header from '../../sections/home-two/Header';
import InnerBannerTwo from '../../sections/home-two/InnerBannerTwo';
import StrickyHeaderTwo from '../../sections/home-two/StrickyHeaderTwo';
import ServiseInner from '../../sections/service/ServiseInner';
// import WhyChooseInner from '../../sections/service/WhyChooseInner';
import WhyChooseA from '../../sections/about/WhyChooseA';
import Seo from '../../components/elements/Seo';
import ContactInner from '../../sections/service/ContactInner';
import FaqInner from '../../sections/service/FaqInner';
import FooterTwo from '../../sections/home-two/FooterTwo';
// import PricingInner from '../../sections/service/PricingInner';

const Service:React.FC = () => {
    return (
        <div className="page-wrapper">
            <Seo
                title="Services | DataPulse Technologies"
                description="Explore DataPulse services: Labour Market Testing (LMT), permanent & contract recruitment, specialized tech talent, flexible staffing, and end-to-end hiring support."
                canonicalPath="/services"
            />
            <Header />
            <InnerBannerTwo
                title="Our"
                subtitle="Services"
                breadcrumb="Our Services"
                background="linear-gradient(135deg, #04083e, #0c3260)"
            />
            <ServiseInner />
            {/* <WhyChooseInner /> */}
            <WhyChooseA />
            <ContactInner />
            <FaqInner />
            {/* <PricingInner /> */}
            <FooterTwo />
            <StrickyHeaderTwo />
        </div>
    );
};

export default Service;