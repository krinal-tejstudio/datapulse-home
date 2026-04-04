import React from 'react';
import HeaderCommon from '../../sections/common/HeaderCommon';
import BannerCommon from '../../sections/common/BannerCommon';
import FooterCommon from '../../sections/common/FooterCommon';
import StrickyHeaderCommon from '../../sections/common/StrickyHeaderCommon';
import BlogListMain from '../../sections/blog/BlogListMain';

const BlogList: React.FC = () => {
    return (
        <div className="page-wrapper">
            <HeaderCommon />
            <BannerCommon title='Blog' subtitle='List' breadcrumb='Blog List' />
            <BlogListMain />
            <FooterCommon />
            <StrickyHeaderCommon />
        </div>
    );
};

export default BlogList;