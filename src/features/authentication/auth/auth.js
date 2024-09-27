import { Link } from 'react-router-dom';

//icon
import { IoArrowBackOutline } from 'react-icons/io5';

import className from 'classnames/bind';
import style from './auth.module.scss';

const cx = className.bind(style);

function Auth({ children }) {
  return (
    <div className={cx('authenticate')}>
      <div className={cx('container')}>
        <div className={cx('content')}>
          <div className={cx('header')}>
            <div className={cx('icon-back')}>
              <Link to="/">
                <IoArrowBackOutline />
              </Link>
            </div>
            <div className={`cx('logo')  flex justify-center items-center`}>
              <Link to="/" className={cx('logo-link')}>
                <img src={require('~/assets/images/logo.png')} alt="logo" />
              </Link>
            </div>
          </div>
          <div className={cx('body')}>{children}</div>
        </div>
        <div className={cx('authenticate--bg')}>
          <div className={cx('authenticate--bg__img')}>
            <div className={cx('img-shape')}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
