import React from 'react';
import { PageHeader } from 'antd';
import './header.css';

const Header = () => {
  return (
    <div className='header-root'>
      <a href="/">
        <PageHeader
          className="site-page-header"
          title="Accelbyte"
          subTitle="Frontend Technical Test"
        />
      </a>
    </div>
  );
};

export default Header;
