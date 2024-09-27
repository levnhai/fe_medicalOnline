import style from './defaultLayout.module.scss';
import classNames from 'classnames/bind';

import Header from '../components/header';
import Footer from '../components/footer';

const cx = classNames.bind(style);

function DefaultLayout({ children }) {
  return (
    <div className={cx('wrapper')}>
      <Header />
      <div className={cx('container')}>
        <div className={cx('content')}>{children}</div>
      </div>
      <Footer />
    </div>
  );
}
export default DefaultLayout;
