import React from 'react';
import HeaderCommon from '../../sections/common/HeaderCommon';
import BannerCommon from '../../sections/common/BannerCommon';
import CtaCommon from '../../sections/common/CtaCommon';
import FooterCommon from '../../sections/common/FooterCommon';
import StrickyHeaderCommon from '../../sections/common/StrickyHeaderCommon';
import AppDevelopmentMain from '../../sections/app-development/AppDevelopmentMain';

const AppDevelopment: React.FC = () => {
    return (
        <div className="page-wrapper">
            <HeaderCommon />
            <BannerCommon title='App' subtitle='Development' breadcrumb='Services' breadcrumbLink='/services' breadcrumb2='App Development' />
            <AppDevelopmentMain />
            <CtaCommon />
            <FooterCommon />
            <StrickyHeaderCommon />
        </div>
    );
};

export default AppDevelopment;