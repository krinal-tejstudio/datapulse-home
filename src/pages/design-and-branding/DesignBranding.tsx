import React from 'react';
import HeaderCommon from '../../sections/common/HeaderCommon';
import BannerCommon from '../../sections/common/BannerCommon'; 
import CtaCommon from '../../sections/common/CtaCommon';
import FooterCommon from '../../sections/common/FooterCommon';
import StrickyHeaderCommon from '../../sections/common/StrickyHeaderCommon';
import DesignBrandingMain from '../../sections/design-and-branding/DesignBrandingMain';

const DesignBranding: React.FC = () => {
    return (
        <div className="page-wrapper">
            <HeaderCommon />
            <BannerCommon title='Design &' subtitle='Branding' breadcrumb='Services' breadcrumbLink='/services' breadcrumb2='Design & Branding' />
            <DesignBrandingMain />
            <CtaCommon />
            <FooterCommon />
            <StrickyHeaderCommon />
        </div>
    );
};

export default DesignBranding;