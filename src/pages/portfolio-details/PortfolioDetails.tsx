import React from 'react';
import HeaderCommon from '../../sections/common/HeaderCommon';
import BannerCommon from '../../sections/common/BannerCommon';
import PortfolioDMain from '../../sections/portfolio/PortfolioDMain';
import FooterCommon from '../../sections/common/FooterCommon';
import StrickyHeaderCommon from '../../sections/common/StrickyHeaderCommon';

const PortfolioDetails:React.FC = () => {
    return (
        <div className="page-wrapper">
            <HeaderCommon />
            <BannerCommon title='Portfolio' subtitle='Details' breadcrumb='Portfolio Details' />
            <PortfolioDMain />
            <FooterCommon />
            <StrickyHeaderCommon />
        </div>
    );
};

export default PortfolioDetails;