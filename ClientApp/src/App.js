import React from 'react';
import { Route, Routes,useLocation } from 'react-router-dom';

import { ChakraProvider } from '@chakra-ui/react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AppRoutes from 'src/components/routes/index';
import Sidebar from 'src/components/layout/sidebar/Sidebar';


import './index.css';
import './components/base/base.css';

export default function App() {

  

  const location = useLocation();
  return (
    <div className="AppContainer">
      <ChakraProvider>
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
      </ChakraProvider>
    </div>

  );
}