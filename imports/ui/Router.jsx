import React from 'react';
import {
  BrowserRouter as Routing, Routes, Route, Navigate,
} from 'react-router-dom';
import { Signup } from './components/Signup/Signup';
import { Signin } from './components/Signin/Signin';
import { Home } from './components/Home/Home';

export const Router = () => (
  <Routing>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/SignUp" element={<Signup />} />
      <Route path="/SignIn" element={<Signin />} />
      <Route path="/" element={<Navigate to="/" />} />
    </Routes>
  </Routing>
);
