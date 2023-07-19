import React from 'react';
import AppRoutes from './components/routes/index';
import { Route, Routes } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './index.css';

  export default function App() {
    return (
      <>
      <Routes>
        {AppRoutes.map((route, index) => {
           const { element, ...rest } = route;
              return <Route key={index} {...rest} element={element} />;
            })}
      </Routes>
      <ToastContainer />
    </>

  );
}