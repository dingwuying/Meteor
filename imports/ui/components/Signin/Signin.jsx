/* eslint-disable no-console */
import React from 'react';
import { Meteor } from 'meteor/meteor';

import {
  Form,
  Input,
  Button,
} from 'antd';
import './signinStyle.css';
import { useNavigate } from 'react-router-dom';

export const Signin = () => {
  const navigate = useNavigate();
  const userSignIn = (values) => {
    Meteor.loginWithPassword(values.email, values.password, (err) => {
      if (err) {
        // eslint-disable-next-line no-console
        console.log('enters err', err.error);
      } else {
        navigate('/Dashboard');
      }
    });
  };

  return (

    <div className="form_container">
      <div className="form_inner_container">
        <div className="form_border_container">
          <Form
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 10 }}
            initialValues={{ remember: true }}
            onFinish={userSignIn}
          >

            <Form.Item
              name="email"
              label="email"
              className="mt_145"
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
              label="password"
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
            <Form.Item className="form_last_child" wrapperCol={{ offset: 11, span: 16 }}>
              <Button
                type="primary"
                htmlType="submit"
              >
                Sign in
              </Button>
            </Form.Item>

          </Form>
        </div>
      </div>
    </div>

  );
};
