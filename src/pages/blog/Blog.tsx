import React from 'react';
import HeaderCommon from '../../sections/common/HeaderCommon';
import BannerCommon from '../../sections/common/BannerCommon';
import FooterCommon from '../../sections/common/FooterCommon';
import StrickyHeaderCommon from '../../sections/common/StrickyHeaderCommon';
import BlogMain from '../../sections/blog/BlogMain';

const Blog: React.FC = () => {
    return (
        <div className="page-wrapper">
            <HeaderCommon />
            <BannerCommon title='Our' subtitle='Blogs' breadcrumb='Our Blogs' />
            <BlogMain />
            <FooterCommon />
            <StrickyHeaderCommon />
        </div>
    );
};

export default Blog;