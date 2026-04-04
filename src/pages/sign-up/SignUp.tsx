import React from 'react';
import HeaderCommon from '../../sections/common/HeaderCommon';
import BannerCommon from '../../sections/common/BannerCommon';
import FooterCommon from '../../sections/common/FooterCommon';
import StrickyHeaderCommon from '../../sections/common/StrickyHeaderCommon';
import SignupMain from '../../sections/authentication/SignupMain';

const SignUp: React.FC = () => {
    return (
        <div className="page-wrapper">
            <HeaderCommon />
            <BannerCommon title='Sign Up' subtitle='Page' breadcrumb='Sign Up' />
            <SignupMain />
            <FooterCommon />
            <StrickyHeaderCommon />
        </div>
    );
};

export default SignUp;