import React from 'react';
import Login from './components/login/Login';
import Registration from './components/register/Registration';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App(props) {
  return (
    <BrowserRouter>
      <Routes>
      <Route exact path="/login" element={Login()} />
      <Route path="/register" element={Registration()} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
