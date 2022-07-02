import React from 'react';
import {
  BrowserRouter as Routing, Routes, Route,
} from 'react-router-dom';
import { Signup } from './components/Signup/Signup';
import { Signin } from './components/Signin/Signin';
import { Home } from './components/Home/Home';
import { DashBoard } from './components/dashboard';
import { PageNotFound } from './components/PageNotFound';
import { PrivateRoutes } from './routes/PrivateRoutes';

export const Router = () => (
  <Routing>
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route exact path="/Dashboard" element={<DashBoard />} />
      </Route>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/SignUp" element={<Signup />} />
      <Route exact path="/SignIn" element={<Signin />} />
      <Route exact path="*" element={<PageNotFound />} />
    </Routes>
  </Routing>
);
