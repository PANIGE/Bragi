import React from 'react';
import AppRoutes from './components/routes/index';
import { Route, Routes } from 'react-router-dom';


import { useLocation } from 'react-router-dom';

import Sidebar from './components/layout/sidebar/Sidebar';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './index.css';
import './components/base/base.css';

  export default function App() {

    const location = useLocation();
    return (
      // if current route value is login hide sidebar + AppContent 
      <div className="AppContainer">

        {location.pathname === '/login' ?
        <Routes>
        {AppRoutes.map((route, index) => {
           const { element, ...rest } = route;
              return <Route key={index} {...rest} element={element} />;
            })}
      </Routes> :
        <>
        <Sidebar />
        <div className="AppContent">
      <Routes>
        {AppRoutes.map((route, index) => {
           const { element, ...rest } = route;
              return <Route key={index} {...rest} element={element} />;
            })}
      </Routes>
      </div>

      </>}
      <ToastContainer />

    </div>

  );
}