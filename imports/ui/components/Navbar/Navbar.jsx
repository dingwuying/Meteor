import React from 'react';
import { Menu } from 'antd';

export const Navbar = () => {
  const items = [
    { label: 'Home', key: 'home' },
    { label: 'About', key: 'about' },
    { label: 'Contact', key: 'contact' },
    {
      label: 'connect',
      key: 'connect',
      children: [
        { label: 'Sign up', key: 'Signup' },
        { label: 'Sign in', key: 'Signin' },
      ],
    },
  ];
  return <Menu items={items} mode="horizontal" />;
};
