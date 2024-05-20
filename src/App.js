import React from 'react';
import Login from './components/Login';
import Registration from './components/Registration';
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
