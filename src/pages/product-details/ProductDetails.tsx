import React from 'react';
import HeaderCommon from '../../sections/common/HeaderCommon';
import BannerCommon from '../../sections/common/BannerCommon';
import FooterCommon from '../../sections/common/FooterCommon';
import StrickyHeaderCommon from '../../sections/common/StrickyHeaderCommon';
import ProductDetailsMain from '../../sections/product-details/ProductDetailsMain';

const ProductDetails: React.FC = () => {
    return (
        <div className="page-wrapper">
            <HeaderCommon />
            <BannerCommon title='Product' subtitle='Details' breadcrumb='Product Details' />
            <ProductDetailsMain />
            <FooterCommon />
            <StrickyHeaderCommon />
        </div>
    );
};

export default ProductDetails;