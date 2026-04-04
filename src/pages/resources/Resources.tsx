import React from 'react';
import Header from '../../sections/home-two/Header';
import InnerBannerTwo from '../../sections/home-two/InnerBannerTwo';
import StrickyHeaderTwo from '../../sections/home-two/StrickyHeaderTwo';
import ResourcesMain from '../../sections/resources/ResourcesMain';
import Seo from '../../components/elements/Seo';
import FooterTwo from '../../sections/home-two/FooterTwo';

const Resources: React.FC = () => {
    return (
        <div className="page-wrapper">
            <Seo
                title="Resources & Insights | DataPulse Technologies"
                description="Guides, articles, and downloads for Labour Market Testing, recruitment compliance, and workforce solutions across Australia."
                canonicalPath="https://datapulsetech-home.vercel.app/resources"
            />
            <Header />
            <InnerBannerTwo
                title="Resources"
                subtitle="& Insights"
                breadcrumb="Resources & Insights"
                background="linear-gradient(135deg, #05062f, #0b2855)"
            />
            <ResourcesMain />
            <FooterTwo />
            <StrickyHeaderTwo />
        </div>
    );
};

export default Resources;
