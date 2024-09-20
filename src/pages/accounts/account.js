import React from 'react';
import { Routes, Route, Link, useLocation, Outlet } from 'react-router-dom';
import Login from './login';
import Register from './register';

const Accounts = () => {
  const location = useLocation();

  return (
    <div>
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Link to="/" className="text-xl font-bold text-indigo-600">
                  Y Khoa
                </Link>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <Link
                  to="/account/login"
                  className={`${
                    location.pathname === '/account/login'
                      ? 'border-indigo-500 text-gray-900'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                >
                  Đăng nhập
                </Link>
                <Link
                  to="/account/register"
                  className={`${
                    location.pathname === '/account/register'
                      ? 'border-indigo-500 text-gray-900'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                >
                  Đăng ký
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Accounts;