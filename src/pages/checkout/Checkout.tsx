import React from 'react';
import HeaderCommon from '../../sections/common/HeaderCommon';
import BannerCommon from '../../sections/common/BannerCommon';
import FooterCommon from '../../sections/common/FooterCommon';
import StrickyHeaderCommon from '../../sections/common/StrickyHeaderCommon';
import CheckoutMain from '../../sections/checkout/CheckoutMain';

const Checkout: React.FC = () => {
    return (
        <div className="page-wrapper">
            <HeaderCommon />
            <BannerCommon title='Checkout' subtitle='Page' breadcrumb='Checkout' />
            <CheckoutMain />
            <FooterCommon />
            <StrickyHeaderCommon />
        </div>
    );
};

export default Checkout;