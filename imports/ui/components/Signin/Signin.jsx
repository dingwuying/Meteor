/* eslint-disable no-console */
import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useNavigate } from 'react-router-dom';

import {
  Form,
  Input,
  Button,
} from 'antd';
import { isVerified } from '../../../api/helpers';

export const Signin = () => {
  const navigate = useNavigate();
  const userSignIn = (values) => {
    console.log('signin', values);
    Meteor.loginWithPassword(values.email, values.password, (err) => {
      if (err) {
        // eslint-disable-next-line no-console
        console.log('enters err', err.error);
      } else
      if (isVerified(Meteor.user())) {
        navigate('/');
      } else {
        console.log('user not verfied');
      }
    });
  };

  return (
    <Form
      onFinish={userSignIn}
    >

      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>
      <Form.Item className="center">
        <Button
          type="primary"
          htmlType="submit"
        >
          Sign in
        </Button>
      </Form.Item>

    </Form>

  );
};
