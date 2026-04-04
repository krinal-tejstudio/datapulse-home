import React from 'react';
import Header from '../../sections/home-two/Header';
import InnerBannerTwo from '../../sections/home-two/InnerBannerTwo';
import StrickyHeaderTwo from '../../sections/home-two/StrickyHeaderTwo';
import ContactMain from '../../sections/contact/ContactMain';
import Seo from '../../components/elements/Seo';
import FooterTwo from '../../sections/home-two/FooterTwo';

const Contact: React.FC = () => {
    return (
        <div className="page-wrapper">
            <Seo
                title="Contact Us | DataPulse Technologies"
                description="Get in touch with DataPulse Technologies for Labour Market Testing, recruitment support, and workforce consulting. We’ll respond quickly with the right next steps."
                canonicalPath="/contact"
            />
            <Header />
            <InnerBannerTwo
                title="Contact"
                subtitle="Us"
                breadcrumb="Contact Us"
                background="linear-gradient(135deg, #051038, #0d3368)"
            />
            <ContactMain  /> 
            <FooterTwo />
            <StrickyHeaderTwo />
        </div>
    );
};

export default Contact;