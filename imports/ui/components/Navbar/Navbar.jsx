import React from 'react';
import { Menu, Col, Row } from 'antd';
import { GithubOutlined } from '@ant-design/icons';
import i18n from 'meteor/universe:i18n';
import './NavbarStyle.css';

const T = i18n.createComponent();

export const Navbar = () => {
  const leftItems = [
    { label: <T>navigation.home</T>, key: 'home' },
    { label: <T>navigation.about</T>, key: 'about' },
    { label: <T>navigation.contact</T>, key: 'contact' },
  ];

  const rightItems = [
    { label: <T>navigation.signUp</T>, key: 'signup' },
    { label: <T>navigation.signIn</T>, key: 'signin' },
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
