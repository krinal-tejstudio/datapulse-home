import React from 'react';
import HeaderCommon from '../../sections/common/HeaderCommon';
import BannerCommon from '../../sections/common/BannerCommon';
import FooterCommon from '../../sections/common/FooterCommon';
import StrickyHeaderCommon from '../../sections/common/StrickyHeaderCommon';
import TeamMain from '../../sections/team/TeamMain';

const Team:React.FC = () => {
    return (
        <div className="page-wrapper">
            <HeaderCommon />
            <BannerCommon title='Team' subtitle='Member' breadcrumb='Team Member' />
            <TeamMain />
            <FooterCommon />
            <StrickyHeaderCommon />
        </div>
    );
};

export default Team;