import React from 'react';
import HeaderCommon from '../../sections/common/HeaderCommon';
import BannerCommon from '../../sections/common/BannerCommon';
import CtaCommon from '../../sections/common/CtaCommon';
import FooterCommon from '../../sections/common/FooterCommon';
import StrickyHeaderCommon from '../../sections/common/StrickyHeaderCommon';
import SearchEngineMain from '../../sections/search-engine/SearchEngineMain';

const SearchEngine: React.FC = () => {
    return (
        <div className="page-wrapper">
            <HeaderCommon />
            <BannerCommon title='Search Engine' subtitle='Optimization' breadcrumb='Services' breadcrumbLink='/services' breadcrumb2='Search Engine Optimization' />
            <SearchEngineMain />
            <CtaCommon />
            <FooterCommon />
            <StrickyHeaderCommon />
        </div>
    );
};

export default SearchEngine;