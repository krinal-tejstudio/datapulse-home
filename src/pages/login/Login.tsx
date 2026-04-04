import React from 'react';
import HeaderCommon from '../../sections/common/HeaderCommon';
import BannerCommon from '../../sections/common/BannerCommon';
import FooterCommon from '../../sections/common/FooterCommon';
import StrickyHeaderCommon from '../../sections/common/StrickyHeaderCommon';
import LoginMain from '../../sections/authentication/LoginMain';

const Login: React.FC = () => {
    return (
        <div className="page-wrapper">
            <HeaderCommon />
            <BannerCommon title='Login' subtitle='Page' breadcrumb='Login' />
            <LoginMain />
            <FooterCommon />
            <StrickyHeaderCommon />
        </div>
    );
};

export default Login;