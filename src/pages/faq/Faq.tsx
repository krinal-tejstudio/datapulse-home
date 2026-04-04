import React from 'react';
import HeaderCommon from '../../sections/common/HeaderCommon';
import BannerCommon from '../../sections/common/BannerCommon';
import FooterCommon from '../../sections/common/FooterCommon';
import StrickyHeaderCommon from '../../sections/common/StrickyHeaderCommon';
import FaqMain from '../../sections/faq/FaqMain';

const Faq: React.FC = () => {
    return (
        <div className="page-wrapper">
            <HeaderCommon />
            <BannerCommon title='Our' subtitle='Faq' breadcrumb='Our Faq' />
            <FaqMain />
            <FooterCommon />
            <StrickyHeaderCommon />
        </div>
    );
};

export default Faq;