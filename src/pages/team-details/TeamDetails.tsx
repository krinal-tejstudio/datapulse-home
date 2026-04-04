import React from 'react';
import HeaderCommon from '../../sections/common/HeaderCommon';
import BannerCommon from '../../sections/common/BannerCommon';
import FooterCommon from '../../sections/common/FooterCommon';
import StrickyHeaderCommon from '../../sections/common/StrickyHeaderCommon';
import TeamDetailsMain from '../../sections/team/TeamDetailsMain';

const TeamDetails: React.FC = () => {
    return (
        <div className="page-wrapper">
            <HeaderCommon />
            <BannerCommon title='Team' subtitle='Member' breadcrumb='Team Member' />
            <TeamDetailsMain />
            <FooterCommon />
            <StrickyHeaderCommon />
        </div>
    );
};

export default TeamDetails;