import React from 'react';
import {
  Form,
  Button,
  Input,
  Checkbox,
}
  from 'antd';
import { Meteor } from 'meteor/meteor';
import './signupStyle.css';

export const Signup = () => {
  const addUser = (values) => {
    Meteor.call('users.register', values);
  };

  return (

    <div className="form_container">
      <div className="form_inner_container">
        <div className="form_border_container">
          <Form
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 10 }}
            initialValues={{ remember: true }}
            onFinish={addUser}
            autoComplete="off"
          >
            <Form.Item
              label="email"
              name="email"
              className="mt_145"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="password"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
              <Checkbox style={{ color: '#fff' }}>Remember me</Checkbox>
            </Form.Item>
            <Form.Item className="form_last_child" wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>

  );
};
