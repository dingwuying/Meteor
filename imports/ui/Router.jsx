import React from 'react';
import { BrowserRouter as Routing, Routes, Route } from 'react-router-dom';
import { Signup } from './components/Signup/Signup';
import { Home } from './components/Home/Home';

export const Router = () => (
  <Routing>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/SignUp" element={<Signup />} />
    </Routes>
  </Routing>
);
