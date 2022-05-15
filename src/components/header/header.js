import React from 'react';
import { PageHeader } from 'antd';
import './header.css';

const Header = () => {
  return (
    <div className='header-root'>
      <PageHeader
        className="site-page-header"
        title="Accelbyte"
        subTitle="Frontend Technical Test"
        onBack={() => window.location.href = "/story-list"}
      />
    </div>
  );
};

export default Header;
