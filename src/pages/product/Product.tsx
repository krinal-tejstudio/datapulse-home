import React from 'react';
import HeaderCommon from '../../sections/common/HeaderCommon';
import BannerCommon from '../../sections/common/BannerCommon';
import FooterCommon from '../../sections/common/FooterCommon';
import StrickyHeaderCommon from '../../sections/common/StrickyHeaderCommon';
import ProductMain from '../../sections/product/ProductMain';

const Product: React.FC = () => {
    return (
        <div className="page-wrapper">
            <HeaderCommon />
            <BannerCommon title='Our' subtitle='Products' breadcrumb='Our Products' />
            <ProductMain />
            <FooterCommon />
            <StrickyHeaderCommon />
        </div>
    );
};

export default Product;