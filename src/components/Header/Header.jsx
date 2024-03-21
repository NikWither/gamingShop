import React from 'react';
import { Layout, Flex } from 'antd';

import Logo from './Logo/Logo.jsx';

const headerStyle = {
    textAlign: 'left',
    height: 64,
    paddingInline: 48,
    lineHeight: '64px',
};

export default function Header() {
  return (
    <Layout.Header style={headerStyle}>
        <Logo />
    </Layout.Header>
  )
}
