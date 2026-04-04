import React from 'react';
import HeaderCommon from '../../sections/common/HeaderCommon';
import BannerCommon from '../../sections/common/BannerCommon';
import FooterCommon from '../../sections/common/FooterCommon';
import StrickyHeaderCommon from '../../sections/common/StrickyHeaderCommon';
import PricingMain from '../../sections/pricing/PricingMain';

const Pricing:React.FC = () => {
    return (
        <div className="page-wrapper">
            <HeaderCommon />
            <BannerCommon title='Our' subtitle='Pricing' breadcrumb='Our Pricing' />
            <PricingMain />
            <FooterCommon />
            <StrickyHeaderCommon />
        </div>
    );
};

export default Pricing;