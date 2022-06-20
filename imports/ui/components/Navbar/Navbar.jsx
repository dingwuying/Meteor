import React from 'react';
import { Menu, Col, Row } from 'antd';
import { GithubOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import i18n from 'meteor/universe:i18n';
import './NavbarStyle.css';

const T = i18n.createComponent();

export const Navbar = () => {
  const leftItems = [
    {
      label: (
        <Link to="/">
          <T>navigation.home</T>
        </Link>
      ),
      key: 'home',
    },
    {
      label: (
        <Link to="/About">
          <T>navigation.about</T>
        </Link>
      ),
      key: 'about',
    },
    {
      label: (
        <Link to="/Contact">
          <T>navigation.contact</T>
        </Link>
      ),
      key: 'contact',
    },
  ];

  const rightItems = [
    {
      label: (
        <Link to="/Signup">
          <T>navigation.signUp</T>
        </Link>
      ),
      key: 'signup',
    },
    {
      label: (
        <Link to="/Signin">
          <T>navigation.signIn</T>
        </Link>
      ),
      key: 'signin',
    },
    { key: 'giticon', icon: <GithubOutlined /> },
  ];

  return (

    <div className="Navbar-container">
      <div className="navbar-inner-container" style={{ maxWidth: '1600px', margin: '0 auto' }}>
        <Row>
          <Col flex={9}>
            <Menu items={leftItems} mode="horizontal" className="navbar" style={{ borderBottom: '0px' }} />
          </Col>
          <Col flex={1}>
            <Menu items={rightItems} mode="horizontal" className="navbar" style={{ borderBottom: '0px' }} />
          </Col>
        </Row>
      </div>
    </div>
  );
};
