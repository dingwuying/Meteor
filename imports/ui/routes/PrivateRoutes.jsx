import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';

export const PrivateRoutes = () => {
  const auth = Meteor.user()?.emails[0]?.verified;
  return auth ? <Outlet /> : <Navigate to="/Home" />;
};
