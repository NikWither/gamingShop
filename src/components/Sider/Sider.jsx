import React from 'react';
import { Layout, Flex } from 'antd';
import { Categories } from './Categories/Categories.jsx';
import './Sider.scss';


const siderStyle = {
    textAlign: 'center',
    backgroundColor: "white",
    position: 'fixed',
    left: 0,
    width: '200px',
};

export default function Sider() {
  return (
    <Layout.Sider style={siderStyle}>
      <div className="sider__wrapper">
        <Categories />
      </div>
    </Layout.Sider>
  )
}
