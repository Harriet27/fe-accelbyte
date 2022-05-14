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
      />
    </div>
  );
};

export default Header;
