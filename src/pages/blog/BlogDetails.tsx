import React from 'react';
import HeaderCommon from '../../sections/common/HeaderCommon';
import BannerCommon from '../../sections/common/BannerCommon';
import FooterCommon from '../../sections/common/FooterCommon';
import StrickyHeaderCommon from '../../sections/common/StrickyHeaderCommon';
import BlogDetailsMain from '../../sections/blog/BlogDetailsMain';
import BlogDetailsCarousel from '../../sections/blog/BlogDetailsCarousel';

const BlogDetails: React.FC = () => {
    return (
        <div className="page-wrapper">
            <HeaderCommon />
            <BannerCommon title='Blog' subtitle='Details' breadcrumb='Blog Details' />
            <BlogDetailsMain />
            <BlogDetailsCarousel />
            <FooterCommon />
            <StrickyHeaderCommon />
        </div>
    );
};

export default BlogDetails;