import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { login } from '~/redux/accounts/accountSlice';

const Login = () => {
  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isEmail = emailOrUsername.includes('@');
    const credentials = isEmail
      ? { email: emailOrUsername, password }
      : { username: emailOrUsername, password };

    try {
      const resultAction = await dispatch(login(credentials));
      if (login.fulfilled.match(resultAction)) {
        toast.success('Đăng nhập thành công!');
        const user = resultAction.payload;
        console.log('Login successful, user data:', user);  // Debug log
        if (user.role === 'doctor' || user.role === 'department_head') {
          navigate('/doctor');
        } else if (user.role === 'admin') {
          navigate('/admin');
        } else {
          navigate('/');  // Default route for other roles
        }
      } else if (login.rejected.match(resultAction)) {
        console.error('Login failed:', resultAction.error);  // Debug log
        if (resultAction.error.message) {
          toast.error(`Đăng nhập thất bại: ${resultAction.error.message}`);
        } else {
          toast.error('Đăng nhập thất bại. Vui lòng thử lại.');
        }
      }
    } catch (err) {
      console.error('Error during login:', err);  // Debug log
      toast.error('Có lỗi xảy ra. Vui lòng thử lại sau.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Đăng nhập tài khoản
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-username" className="sr-only">
                Email hoặc Tên người dùng
              </label>
              <input
                id="email-username"
                name="email-username"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email hoặc Tên người dùng"
                value={emailOrUsername}
                onChange={(e) => setEmailOrUsername(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Mật khẩu
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Mật khẩu"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Đăng nhập
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
