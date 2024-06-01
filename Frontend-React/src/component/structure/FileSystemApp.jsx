import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import FileSystemLayout from './FileSystemLayout';

import Login from '../auth/Login';
import Register from '../auth/Register';
import Logout from '../auth/Logout';
import HomePage from '../content/HomePage';


function FileSystemApp() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FileSystemLayout />}>
          <Route index element={<HomePage />} />

          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/logout" element={<Logout />}></Route>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default FileSystemApp;
