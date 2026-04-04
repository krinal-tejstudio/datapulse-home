import React from 'react';
import HeaderCommon from '../../sections/common/HeaderCommon';
import BannerCommon from '../../sections/common/BannerCommon';
import FooterCommon from '../../sections/common/FooterCommon';
import StrickyHeaderCommon from '../../sections/common/StrickyHeaderCommon';
import PortfolioMain from '../../sections/portfolio/PortfolioMain';

const Portfolio:React.FC = () => {
    return (
        <div className="page-wrapper">
            <HeaderCommon />
            <BannerCommon title='Our' subtitle='Portfolio' breadcrumb='Our Portfolio' />
            <PortfolioMain />
            <FooterCommon />
            <StrickyHeaderCommon />
        </div>
    );
};

export default Portfolio;