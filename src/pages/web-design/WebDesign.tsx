import React from 'react';
import HeaderCommon from '../../sections/common/HeaderCommon';
import BannerCommon from '../../sections/common/BannerCommon';
import CtaCommon from '../../sections/common/CtaCommon';
import FooterCommon from '../../sections/common/FooterCommon';
import StrickyHeaderCommon from '../../sections/common/StrickyHeaderCommon';
import WebDesignMain from '../../sections/web-design/WebDesignMain';

const WebDesign: React.FC = () => {
    return (
        <div className="page-wrapper">
            <HeaderCommon />
            <BannerCommon title='Web Design &' subtitle='Development' breadcrumb='Services' breadcrumbLink='/services' breadcrumb2='Web Design & Development' />
            <WebDesignMain />
            <CtaCommon />
            <FooterCommon />
            <StrickyHeaderCommon />
        </div>
    );
};

export default WebDesign;