import React from 'react';
import HeaderCommon from '../../sections/common/HeaderCommon';
import BannerCommon from '../../sections/common/BannerCommon';
import FooterCommon from '../../sections/common/FooterCommon';
import StrickyHeaderCommon from '../../sections/common/StrickyHeaderCommon';
import WishlistMain from '../../sections/wishlist/WishlistMain';

const Wishlist: React.FC = () => {
    return (
        <div className="page-wrapper">
            <HeaderCommon />
            <BannerCommon title='Wishlist' subtitle='Page' breadcrumb='Wishlist' />
            <WishlistMain />
            <FooterCommon />
            <StrickyHeaderCommon />
        </div>
    );
};

export default Wishlist;