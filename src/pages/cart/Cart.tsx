import React from 'react';
import HeaderCommon from '../../sections/common/HeaderCommon';
import BannerCommon from '../../sections/common/BannerCommon';
import FooterCommon from '../../sections/common/FooterCommon';
import StrickyHeaderCommon from '../../sections/common/StrickyHeaderCommon';
import CartMain from '../../sections/cart/CartMain';

const Cart: React.FC = () => {
    return (
        <div className="page-wrapper">
            <HeaderCommon />
            <BannerCommon title='Cart' subtitle='Page' breadcrumb='cart' />
            <CartMain />
            <FooterCommon />
            <StrickyHeaderCommon />
        </div>
    );
};

export default Cart;