import React from 'react';
import { Menu, Col, Row } from 'antd';
import { GithubOutlined } from '@ant-design/icons';
import './NavbarStyle.css';

export const Navbar = () => {
  const leftItems = [
    { label: 'Home', key: 'home' },
    { label: 'About', key: 'about' },
    { label: 'Contact', key: 'contact' },
  ];

  const rightItems = [
    { label: 'Sign up', key: 'Signup' },
    { label: 'Sign in', key: 'Signin' },
    { key: 'giticon', icon: <GithubOutlined /> },
  ];

  return (

    <Row>
      <Col flex={9}>
        <Menu items={leftItems} mode="horizontal" className="navbar" />
      </Col>
      <Col flex={1}>
        <Menu items={rightItems} mode="horizontal" className="navbar" />
      </Col>
    </Row>
  );
};
