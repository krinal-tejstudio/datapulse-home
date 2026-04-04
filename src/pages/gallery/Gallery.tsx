import React from 'react';
import HeaderCommon from '../../sections/common/HeaderCommon';
import BannerCommon from '../../sections/common/BannerCommon';
import FooterCommon from '../../sections/common/FooterCommon';
import StrickyHeaderCommon from '../../sections/common/StrickyHeaderCommon';
import GalleryMain from '../../sections/gallery/GalleryMain';

const Gallery: React.FC = () => {
    return (
        <div className="page-wrapper">
            <HeaderCommon />
            <BannerCommon title='Our' subtitle='Gallery' breadcrumb='Our Gallery' />
            <GalleryMain  />
            <FooterCommon />
            <StrickyHeaderCommon />
        </div>
    );
};

export default Gallery;