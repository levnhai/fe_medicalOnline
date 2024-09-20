import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes, privateRoutes } from '~/routes';
import { Fragment } from 'react';
import './index.css'; 
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './redux/store';

import DefaultLayout from './layouts/defaultLayout';

function App() {
  return (
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <Routes>
          {publicRoutes.map((route, index) => {
            let Layout = DefaultLayout;
            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }
            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                    <ToastContainer />
                  </Layout>
                }
              />
            );
          })}
          {privateRoutes.map((route, index) => (
            <Route
              key={`private-${index}`}
              path={route.path}
              element={route.element}
            />
          ))}
        </Routes>
      </Router>
    </PersistGate>
  );
}

export default App;