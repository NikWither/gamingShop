import React from 'react';
import { Layout, Flex } from 'antd';

const footerStyle = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#4096ff',
};

export default function Footer() {
  return (
    <Layout.Footer style={footerStyle}>Footer</Layout.Footer>
  )
}
