import React from 'react';
import HeaderCommon from '../../sections/common/HeaderCommon';
import BannerCommon from '../../sections/common/BannerCommon';
import FooterCommon from '../../sections/common/FooterCommon';
import StrickyHeaderCommon from '../../sections/common/StrickyHeaderCommon';
import CtaCommon from '../../sections/common/CtaCommon';
import DigitalMain from '../../sections/digital-marketing/DigitalMain';

const DigitalMarketing:React.FC = () => {
    return (
        <div className="page-wrapper">
            <HeaderCommon />
            <BannerCommon title='Digital' subtitle='Marketing' breadcrumb='Services' breadcrumbLink='/services' breadcrumb2='Digital Marketing' />
            <DigitalMain />
            <CtaCommon />
            <FooterCommon />
            <StrickyHeaderCommon />
        </div>
    );
};

export default DigitalMarketing;